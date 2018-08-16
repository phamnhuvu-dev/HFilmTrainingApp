import 'package:flutter/material.dart';

class DescriptionMore extends StatefulWidget {

  final String data;

  DescriptionMore({Key key,@required this.data}): super(key: key);

  @override
  State<StatefulWidget> createState() {
    return _State();
  }

}

class _State extends State<DescriptionMore> {

  bool _isMore = false;

  _State();

  @override
  Widget build(BuildContext context) {
    int line;
    if (_isMore) {
      line = 100;
    } else {
      line = 4;
    }
    return Column(
      children: <Widget>[
        Text(
          widget.data,
          maxLines: line,
          textAlign: TextAlign.justify,
          overflow: TextOverflow.ellipsis,
        ),
        Align(
          alignment: Alignment.bottomRight,
          child: GestureDetector(
            onTap: () =>
                setState(() {
                  _isMore = !_isMore;
                }),
            child: Text(
              _isMore? "Rút gọn": "Xem thêm",
              style: TextStyle(
                color: Colors.white70,
                fontStyle: FontStyle.italic,
                decoration: TextDecoration.underline,
              ),
            ),
          ),
        )
      ],
    );
  }
}
