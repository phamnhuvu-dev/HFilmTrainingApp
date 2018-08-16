
class Film {
  int _id;
  String _title;
  String _englishTitle;
  String _vietnamTitle;
  String _image;
  String _link;
  String _description;
  String _category;
  String _actor;
  String _director;
  String _manufacturer;
  String _duration;
  int _views;
  bool _like;


  Film(this._id, this._title, this._image, this._link, this._description,
      this._category, this._actor, this._director, this._manufacturer,
      this._duration, this._views);

  int get id => _id;

  set id(int value) {
    _id = value;
  }

  String get title => _title;

  set title(String value) {
    _title = value;
    List<String> titles = value.split(" / ");
    if (titles.length > 1) {
      _englishTitle = titles[0];
      _vietnamTitle = titles[1];
    } else {
      _englishTitle = titles[0];
      _vietnamTitle = _englishTitle;
    }
  }

  String get englishTitle => _englishTitle;

  set englishTitle(String value) {
    _englishTitle = value;
  }

  String get vietnamTitle => _vietnamTitle;

  set vietnamTitle(String value) {
    _vietnamTitle = value;
  }

  int get views => _views;

  set views(int value) {
    _views = value;
  }

  String get duration => _duration;

  set duration(String value) {
    _duration = value;
  }

  String get manufacturer => _manufacturer;

  set manufacturer(String value) {
    _manufacturer = value;
  }

  String get director => _director;

  set director(String value) {
    _director = value;
  }

  String get actor => _actor;

  set actor(String value) {
    _actor = value;
  }

  String get category => _category;

  set category(String value) {
    _category = value;
  }

  String get description => _description;

  set description(String value) {
    _description = value;
  }

  String get link => _link;

  set link(String value) {
    _link = value;
  }

  String get image => _image;

  set image(String value) {
    _image = value;
  }


  bool get like => _like;

  set like(bool value) {
    _like = value;
  }

  Film.fromJson(Map<String, dynamic> json)
      :
        _id           = json['id'],
        _title        = json['title'],
        _image        = json['image'],
        _link         = json['link'],
        _description  = json['description'],
        _category     = json['category'],
        _actor        = json['actor'],
        _director     = json['director'],
        _manufacturer = json['manufacturer'],
        _duration     = json['duration'],
        _views        = json['views']
  ;
}