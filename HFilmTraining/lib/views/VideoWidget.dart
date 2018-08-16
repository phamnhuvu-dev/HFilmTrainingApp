import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class VideoWidget extends StatefulWidget {

  final String link;


  VideoWidget({Key key, @required this.link}): super(key: key);

  @override
  State<StatefulWidget> createState() => _State();

}

class _State extends State<VideoWidget> {
  VideoPlayerController _controller;
  bool _isPlaying = false;


  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.network(
      'https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4'
    )
      ..addListener(() {
        final bool isPlaying = _controller.value.isPlaying;
        if (isPlaying != _isPlaying) {
          setState(() {
            _isPlaying = isPlaying;
          });
        }
      })
      ..initialize().then((_) {
        // Ensure the first frame is shown after the video is initialized, even before the play button has been pressed.
        setState(() {});
      });
  }

  @override
  Widget build(BuildContext context) {
    return
      GestureDetector(
        onTap: _controller.value.isPlaying
            ? _controller.pause
            : _controller.play,

        child: _controller.value.initialized
            ? AspectRatio(
          aspectRatio: _controller.value.aspectRatio,
          child: VideoPlayer(_controller),
        ) : Container(),
      );

  }

}
