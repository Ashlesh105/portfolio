import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

void main() => runApp(MaterialApp(
  theme: ThemeData(scaffoldBackgroundColor: Colors.greenAccent),
  home: const Profile(), debugShowCheckedModeBanner: false,
));

class Profile extends StatelessWidget {
  const Profile({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('My portfolio'),
        ),
        body: SingleChildScrollView(             //to add vertical scrolling
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const SizedBox(
                  height: 10,
                ),
                const Text(
                  'Flutter Dev',
                  style: TextStyle(
                      fontSize: 30,
                      color: Colors.black,
                      fontWeight: FontWeight.bold),
                ),
                const CircleAvatar(
                  radius: 80,
                  backgroundImage: AssetImage('assets/mypic1.jpg'),
                ),
                const SizedBox(
                  height: 10,
                ),
                const Text('Ashlesh Kini T',
                    style: TextStyle(fontSize: 20, color: Colors.black)),
                const SizedBox(
                  height: 10,
                ),
                Column(
                  children: [
                    const Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Icon(Icons.mail),
                        Text('tashleshkini@gmail.com',
                            style: TextStyle(fontSize: 20, color: Colors.black)),
                      ],
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    const Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Icon(Icons.call),
                        Text('8150960662',
                            style: TextStyle(fontSize: 20, color: Colors.black)),
                      ],
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    const Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Icon(Icons.location_on),
                        Text('Kalsanka,Kadiyali Road,Udupi',
                            style: TextStyle(fontSize: 20, color: Colors.black)),
                      ],
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        const Icon(Icons.link),
                        RichText(
                            text: TextSpan(children: [
                              TextSpan(
                                style: const TextStyle(
                                    fontSize: 20, color: Colors.blueGrey),
                                text: "github.com/Ashlesh105",
                                recognizer: TapGestureRecognizer()
                                  ..onTap = () async {
                                    const url = "https://github.com/Ashlesh105";
                                    if (await canLaunchUrl(Uri.parse(url))) {
                                      await launchUrl(Uri.parse(url));
                                    } else {
                                      throw "cannot load";
                                    }
                                  },
                              ),
                            ]))
                      ],
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        const Icon(Icons.link),
                        RichText(
                            text: TextSpan(children: [
                              TextSpan(
                                style: const TextStyle(
                                    fontSize: 20, color: Colors.blueGrey),
                                text: "MyLinkedin",
                                recognizer: TapGestureRecognizer()
                                  ..onTap = () async {
                                    const url =
                                        "https://www.linkedin.com/in/ashlesh-kini-5011411bb/";
                                    if (await canLaunchUrl(Uri.parse(url))) {
                                      await launchUrl(Uri.parse(url));
                                    } else {
                                      throw "cannot load";
                                    }
                                  },
                              ),
                            ])),
                      ],
                    )
                  ],
                )
              ],
            ),
          ),
        ));
  }
}
