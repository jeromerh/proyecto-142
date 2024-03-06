padle_2=10
padle_1=10

padle_1_x=10
padle_2_y=685

padle_1_heigt=110
padle_2_heigt=70

score_1=0
score_2=0

padle_1_y=0
player_score=0

pc_score=0

ball={
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}

rigt_wrist_x=0
rigt_wrist_y=0

score_rigt_wrist=0

game_satus=""

function preload(){


}

function setup(){

 canvas=createCanvas(700,600)
 canvas.parent("canvas")
 video=createVideo(VIDEO)
 video.size(700,600)
 video.hide()
 posenet=ml5.poseNet(video,modelLoaded)
 posenet.on("pose",gotPose)

}

function modelLoaded(){
console.log("modelo cargado correctamente")

}

function gotPose(error,results){
if(error){
    console.error(error)
}
console.log(results)

if(results.length>0){
rigt_wrist_y=results[0].pose.rigt_wrist.y
rigt_wrist_x=results[0].pose.rigt_wrist.x
score_rigt_wrist=results[0].pose.keypoints[10].score
}
}

function start_game(){
    game_satus="start"
    document.getElementById("status").innerHTML="el juego esta cargado"
}

function draw (){
    if(game_satus=="start"){
        image(video,0,0,700,600)
        fill("black")
        stroke("black")
        rect(680,0,20,700)

        fill("black")
        stroke("black")
        rect(0,0,20,700)
    }

    if(score_rigt_wrist>0.2){
        fill("lightgreen")
        stroke("lightgreen")
        circle(rigt_wrist_x,rigt_wrist_y,30)
    }
    paddle_in_canvas()

    fill("white")
    stroke("white")

    padle_2_Y=ball.y-padle_2_heigt/2
    rect(padle_2_Y,padle_2_y,padle_2,padle_2_heigt,100)
    midline()
}

function paddle_in_canvas(){
    if(mouse_Y+padle_1_heigt>height){
        mouse_Y=height-padle_1_heigt
    }

    if(mouse_Y<0){
        mouse_Y=0
    }
}

function midline(){
    for(i=0;i<480;i+=10){
    y=0
    stroke("white")
    fill("white")
    rect(width/2,)
    }
}