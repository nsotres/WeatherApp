import QtQuick 2.0
import "Control.js" as Control



//main window WEATHER APP
Rectangle {
    width: 1024
    height: 768

    //view manager
    Rectangle {
        id: viewManager
        anchors.fill: parent

        //holds diff views
        Rectangle{
            id: viewsContainer
            anchors.fill: parent

            //view 1
            Rectangle {
                id: view1
                anchors.fill: parent
                anchors.centerIn: parent
                //main grid holding layout for view1
                Grid{
                    id: mainGrid
                    columns: 1
                    //holds main menu bar
                    Grid{
                        id: menuBarGrid
                        columns: 8
                        Rectangle{
                            id: menuBarSpace
                            color: "plum"
                            width: 20
                            height: 80
                        }

                        Rectangle{
                            id: menuBarPrompt
                            color: "plum"
                            width: 200
                            height: 80
                            Text{
                                id: prompt
                                anchors.centerIn: parent
                                font.family: "Calibri"
                                font.pointSize: 20.0
                                font.capitalization: Font.Capitalize
                                text: "           Enter a city: "
                            }
                        }
                        Rectangle{
                            id: menuBarInput
                            color: "plum"
                            width: 200
                            height: 80
                            //input for user
                            TextInput{
                                width: 100
                                id: city_label
                                anchors.centerIn: parent
                                font.family: "Calibri"
                                font.pointSize: 20.0
                                font.capitalization: Font.Capitalize
                                text: "Chicago"
                                focus: true
                            }
                        }
                        Rectangle{
                            id: menuBarButton
                            color: "plum"
                            width: 200
                            height: 80

                            //clicking on button sets everything off
                            Button{
                                id: buttonRequest
                                height: 80
                                anchors.left: parent

                                text: "\n     Get\n Weather"
                                onClicked: {
                                    //makes call to Control Class' function setVar(city)
                                    Control.setVar(city_label.text)
                                }

                            }
                        }
                        Rectangle{
                            id: menuBarSpace2
                            color: "plum"
                            width: 164
                            height: 80
                        }
                        Rectangle{
                            id: menuBarLang
                            color: "violet"
                            width: 80
                            height: 80
                            border.color: "plum"
                            border.width: 4
                            Text{
                                id: buttonLang
                                anchors.centerIn: parent
                                font.family: "Calibri"
                                font.pointSize: 15.0
                                font.capitalization: Font.Capitalize
                                text: "lang."
                            }
                        }
                        Rectangle{
                            id: menuBarMetric
                            color: "violet"
                            width: 80
                            height: 80
                            border.color: "plum"
                            border.width: 4
                            Text{
                                id: buttonMetric
                                anchors.centerIn: parent
                                font.family: "Calibri"
                                font.pointSize: 15.0
                                font.capitalization: Font.Capitalize
                                text: "metric"
                            }
                        }
                        Rectangle{
                            id: menuBarQuit
                            color: "violet"
                            width: 80
                            height: 80
                            border.color: "plum"
                            border.width: 4
                            Text{
                                id: buttonQuit
                                anchors.centerIn: parent
                                font.family: "Calibri"
                                font.pointSize: 15.0
                                font.capitalization: Font.Capitalize
                                text: "quit"
                            }
                            MouseArea{
                                id: mouseRegionQuit
                                anchors.fill: parent
                                onClicked:{Qt.quit();}
                            }
                        }
                    }


                    //current weather grid
                    Grid{
                        id: row0
                        columns: 4
                        spacing: 0
                        //spot for degrees
                        Rectangle{
                            color: "light green"
                            id: row0spot1
                            width: 380
                            height: 200
                            //prompt for city
                            Text{
                                id: currentCity
                                anchors.centerIn: parent
                                font.family: "Calibri"
                                font.pointSize: 50.0
                                font.capitalization: Font.Capitalize
                                text: ""
                            }

                        }
                        Rectangle{
                            color: "light green"
                            id: row0spot2
                            width: 190
                            height: 200
                            Text{
                                id: currentDegrees
                                anchors.centerIn: parent
                                font.family: "Calibri"
                                font.pointSize: 55.0
                                text: ""
                            }
                        }
                        Grid{
                            id: currWeatherIconGrid
                            columns:1
                            spacing: 0
                            //icon holder
                            Rectangle{
                                color: "light green"
                                id: row0spot3top
                                width: 174
                                height: 150

                                Image{
                                    id: currentWeatherIcon
                                    anchors.centerIn: parent
                                    source: "status"
                                }
                            }
                            Rectangle{
                                color: "light green"
                                id: row0spot3bott
                                width: 174
                                height: 50
                                Text{
                                    anchors.centerIn: parent
                                    id: currentWeatherDesc
                                    font.family: "Calibri"
                                    font.pointSize: 15.0
                                    text: ""
                                }
                            }
                        }


                        Rectangle{
                            color: "light green"
                            id: row0spot4
                            width: 280
                            height: 200
                            Grid{
                                columns: 1
                                spacing: 0
                                Rectangle{
                                    id: row0spot4Top
                                    color: "light green"
                                    width: 280
                                    height: 125
                                    Text{
                                        anchors.centerIn: parent
                                        id: currentDay
                                        font.family: "Calibri"
                                        font.pointSize: 55.0
                                        text: ""
                                    }
                                }
                                Rectangle{
                                    id: row0spot4Bottom
                                    color: "light green"
                                    width: 280
                                    height: 75
                                    Text{
                                        anchors.centerIn: parent
                                        id: currentDate
                                        font.family: "Calibri"
                                        font.pointSize: 25.0
                                        text: ""
                                    }
                                }


                            }


                        }
                    }

                    //future forecast grid
                    Grid{
                        id: futureForecast
                        columns: 5
                        //future forecast day 1
                        Rectangle{
                            id: day1boxOuter
                            color: "transparent"
                            border.color: "light blue"
                            border.width: 5
                            width: 205
                            height: 150
                            Grid{
                                id: day1box
                                columns: 1
                                Rectangle{
                                    id: day1BorderTop
                                    color: "light blue"
                                    width:200
                                    height: 5
                                }

                                Grid{
                                    id: day1Top
                                    columns: 2
                                    Rectangle{
                                        color: "light blue"
                                        width: 5
                                        height: 50
                                    }
                                    Rectangle{
                                        id: row1Spot1
                                        color: "sky blue"
                                        width: 196
                                        height: 50
                                        Text{
                                            id: day1Text
                                            anchors.centerIn: parent
                                            font.family: "Calibri"
                                            font.pointSize: 20.0
                                            text: ""
                                        }
                                        MouseArea{
                                            id: day1MouseA
                                            anchors.fill: parent
                                            onClicked: console.log("clicked day1")
                                        }
                                    }
                                }
                                Grid{
                                    id: day1Bott
                                    columns: 3
                                    Rectangle{
                                        color: "light blue"
                                        width: 5
                                        height: 100
                                    }

                                    Rectangle{
                                        color: "sky blue"
                                        width: 98
                                        height: 100
                                        Text{
                                            id: futureD1
                                            anchors.centerIn: parent
                                            font.family: "Calibri"
                                            font.pointSize: 20.0
                                            text: ""
                                        }

                                    }
                                    Rectangle{
                                        color: "sky blue"
                                        width: 98
                                        height: 100
                                        Image{
                                            id: day1Icon
                                            anchors.centerIn: parent
                                            source: "n/a"
                                        }
                                    }
                                }

                            }
                        }
                        //future forecast day 2
                        Rectangle{
                            id: day2boxOuter
                            color: "transparent"
                            border.color: "light blue"
                            border.width: 5
                            width: 205
                            height: 150
                            Grid{
                                id: day2box
                                columns: 1
                                Rectangle{
                                    id: day2BorderTop
                                    color: "light blue"
                                    width:200
                                    height: 5
                                }

                                Grid{
                                    id: day2Top
                                    columns: 2
                                    Rectangle{
                                        color: "light blue"
                                        width: 5
                                        height: 50
                                    }
                                    Rectangle{
                                        id: row1Spot2
                                        color: "sky blue"
                                        width: 196
                                        height: 50
                                        Text{
                                            id: day2Text
                                            anchors.centerIn: parent
                                            font.family: "Calibri"
                                            font.pointSize: 20.0
                                            text: ""
                                        }
                                        MouseArea{
                                            id: day2MouseA
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(2);
                                        }
                                    }
                                }
                                Grid{
                                    id: day2Bott
                                    columns: 3
                                    Rectangle{
                                        color: "light blue"
                                        width: 5
                                        height: 100
                                    }

                                    Rectangle{
                                        color: "sky blue"
                                        width: 98
                                        height: 100
                                        Text{
                                            id: futureD2
                                            anchors.centerIn: parent
                                            font.family: "Calibri"
                                            font.pointSize: 20.0
                                            text: ""
                                        }
                                        MouseArea{
                                            id: day2MouseB
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(2);
                                        }
                                    }
                                    Rectangle{
                                        color: "sky blue"
                                        width: 98
                                        height: 100
                                        Image{
                                            id: day2Icon
                                            anchors.centerIn: parent
                                            source: "n/a"
                                        }
                                        MouseArea{
                                            id: day2MouseC
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(2);
                                        }
                                    }
                                }

                            }
                        }
                        //future forecast day 3
                        Rectangle{
                            id: day3boxOuter
                            color: "transparent"
                            border.color: "light blue"
                            border.width: 5
                            width: 205
                            height: 150
                            Grid{
                                id: day3box
                                columns: 1
                                Rectangle{
                                    id: day3BorderTop
                                    color: "light blue"
                                    width:200
                                    height: 5
                                }

                                Grid{
                                    id: day3Top
                                    columns: 2
                                    Rectangle{
                                        color: "light blue"
                                        width: 5
                                        height: 50
                                    }
                                    Rectangle{
                                        id: row1Spot3
                                        color: "sky blue"
                                        width: 196
                                        height: 50
                                        Text{
                                            id: day3Text
                                            anchors.centerIn: parent
                                            font.family: "Calibri"
                                            font.pointSize: 20.0
                                            text: ""
                                        }
                                        MouseArea{
                                            id: day3MouseA
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(3);
                                        }
                                    }
                                }
                                Grid{
                                    id: day3Bott
                                    columns: 3
                                    Rectangle{
                                        color: "light blue"
                                        width: 5
                                        height: 100
                                    }

                                    Rectangle{
                                        color: "sky blue"
                                        width: 98
                                        height: 100
                                        Text{
                                            id: futureD3
                                            anchors.centerIn: parent
                                            font.family: "Calibri"
                                            font.pointSize: 20.0
                                            text: ""
                                        }
                                        MouseArea{
                                            id: day3MouseB
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(3);
                                        }

                                    }
                                    Rectangle{
                                        color: "sky blue"
                                        width: 98
                                        height: 100
                                        Image{
                                            id: day3Icon
                                            anchors.centerIn: parent
                                            source: "n/a"
                                        }
                                        MouseArea{
                                            id: day3MouseC
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(3);
                                        }
                                    }
                                }

                            }
                        }
                        //future forecast day 4
                        Rectangle{
                            id: day4boxOuter
                            color: "transparent"
                            border.color: "light blue"
                            border.width: 5
                            width: 205
                            height: 150
                            Grid{
                                id: day4box
                                columns: 1
                                Rectangle{
                                    id: day4BorderTop
                                    color: "light blue"
                                    width:200
                                    height: 5
                                }

                                Grid{
                                    id: day4Top
                                    columns: 2
                                    Rectangle{
                                        color: "light blue"
                                        width: 5
                                        height: 50
                                    }
                                    Rectangle{
                                        id: row1Spot4
                                        color: "sky blue"
                                        width: 196
                                        height: 50
                                        Text{
                                            id: day4Text
                                            anchors.centerIn: parent
                                            font.family: "Calibri"
                                            font.pointSize: 20.0
                                            text: ""
                                        }
                                        MouseArea{
                                            id: day4MouseA
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(4);
                                        }
                                    }
                                }
                                Grid{
                                    id: day4Bott
                                    columns: 3
                                    Rectangle{
                                        color: "light blue"
                                        width: 5
                                        height: 100
                                    }

                                    Rectangle{
                                        color: "sky blue"
                                        width: 98
                                        height: 100
                                        Text{
                                            id: futureD4
                                            anchors.centerIn: parent
                                            font.family: "Calibri"
                                            font.pointSize: 20.0
                                            text: ""
                                        }
                                        MouseArea{
                                            id: day4MouseB
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(4);
                                        }

                                    }
                                    Rectangle{
                                        color: "sky blue"
                                        width: 98
                                        height: 100
                                        Image{
                                            id: day4Icon
                                            anchors.centerIn: parent
                                            source: "n/a"
                                        }
                                        MouseArea{
                                            id: day4MouseC
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(4);
                                        }
                                    }
                                }

                            }
                        }
                        // future forecast day 5
                        Rectangle{
                            id: day5boxOuter
                            color: "transparent"
                            border.color: "light blue"
                            border.width: 5
                            width: 205
                            height: 150
                            Grid{
                                id: day5box
                                columns: 1
                                Rectangle{
                                    id: day5BorderTop
                                    color: "light blue"
                                    width:200
                                    height: 5
                                }

                                Grid{
                                    id: day5Top
                                    columns: 2
                                    Rectangle{
                                        color: "light blue"
                                        width: 5
                                        height: 50
                                    }
                                    Rectangle{
                                        id: row1Spot5
                                        color: "sky blue"
                                        width: 196
                                        height: 50
                                        Text{
                                            id: day5Text
                                            anchors.centerIn: parent
                                            font.family: "Calibri"
                                            font.pointSize: 20.0
                                            text: ""
                                        }
                                        MouseArea{
                                            id: day5MouseA
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(5);
                                        }
                                    }
                                }
                                Grid{
                                    id: day5Bott
                                    columns: 3
                                    Rectangle{
                                        color: "light blue"
                                        width: 5
                                        height: 100
                                    }

                                    Rectangle{
                                        color: "sky blue"
                                        width: 98
                                        height: 100
                                        Text{
                                            id: futureD5
                                            anchors.centerIn: parent
                                            font.family: "Calibri"
                                            font.pointSize: 20.0
                                            text: ""
                                        }
                                        MouseArea{
                                            id: day5MouseB
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(5);
                                        }

                                    }
                                    Rectangle{
                                        color: "sky blue"
                                        width: 98
                                        height: 100
                                        Image{
                                            id: day5Icon
                                            anchors.centerIn: parent
                                            source: "n/a"
                                        }
                                        MouseArea{
                                            id: day5MouseC
                                            anchors.fill: parent
                                            onClicked: Control.updateBottomPanel2(5);
                                        }
                                    }
                                }

                            }
                        }

                    }

                    //bottom panels holding info
                    Grid{
                        id: bottomGrid
                        columns: 3
                        spacing: 0
                        Rectangle{
                            color: "light blue"
                            id: infoPanel1
                            width: 64
                            height: 338
                        }

                        Rectangle{
                            color: "light blue"
                            id: infoPanel2
                            width: 460
                            height: 338
                            Text{
                                id: infoPanel1Text
                                font.family: "Calibri"
                                font.pointSize: 11.0
                                text: ""
                            }

                        }
                        Rectangle{
                            color: "light blue"
                            id: infoPanel3
                            width: 500
                            height: 338
                            Text{
                                id: infoPanel2Text
                                font.family: "Calibri"
                                font.pointSize: 11.0
                                text: ""
                            }
                        }
                    }
                } //end mainGrid




                /*//color: "blue"
                anchors.fill: parent
                Text {
                    id: view1Text
                    text: "View1"
                    anchors.centerIn: parent
                }
                Button {

                    id: button1
                    text: "Go to View 2"
                    onClicked: {
                        console.log("Clicked view1 felix");
                        view1.visible = false
                        view2.visible = true

                    }

                } */

            }
            //view 2
            Rectangle {
                id: view2
                anchors.fill: parent
                Text {
                    id: view2Text
                    text: "View 2"
                    anchors.centerIn: parent
                }

                Button {
                    id: button2
                    text: "Go to View 1"
                        onClicked: {
                        console.log("Clicked view 2 felix");
                        view2.visible = false
                        view1.visible = true
                    }
                }
            }

        }
        //upon loading rectangle turn off all other views
        Component.onCompleted: {

            var views = viewsContainer.children;
            var view;
            for(var i = 0; i < views.length; i++){
                view = views[i]
                view.visible = false;

            }
            //turn first view on
            views[0].visible = true;

        }
    }


}
