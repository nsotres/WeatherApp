import QtQuick 2.0

Rectangle {

    id: buttonView
    signal clicked
    property string text
    width: 80
    height: 60
    color: "violet"
    border.color: "plum"
    border.width: 4
    Text{
        id: buttonText
        font.family: "Calibri"
        font.pointSize: 15.0
        font.capitalization: Font.Capitalize
        text: buttonView.text

    }
    MouseArea{
        id: mouseRegion
        anchors.fill: parent
        onClicked:{buttonView.clicked();}
    }

}
