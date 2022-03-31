function preload()
{}
    function setup()
    {
        canvas = createCanvas(640, 480);
        canvas.position(110, 250);
        video = createCapture(VIDEO);
        video.hide();
    }
    function draw()
    {
        image(video, 200, 200, 200, 200);
        fill('#ADD8E6');
        circle(5, 5, 40)
        circle(630, 470, 40)
        circle(630, 5, 40)
        circle(5, 470, 40)
    }
    function take_snapshot()
    {
        save('student_name.png');
    }