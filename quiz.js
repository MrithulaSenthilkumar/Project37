class Quiz{
    constructor(){  
        }

        getState(){
            var gameStateRef=database.ref("gameState");
            gameStateRef.on("value",function(data){
                gameState=data.val();
            })
        }

        update(state){
            database.ref("/").update({
                gameState:state
            })
        }

        async start(){
            if(gameState===0){
            conntestant= new Contestant();
            var ContestantCountRef=await database.ref("contestantCount").once("value");
            if(ContestantCountRef.exists()){
            ContestantCount=ContestantCountRef.val();
            Contestant.getCount();
            }

            question=new Question();
            question.display();

            }
        }

        play(){
            question.hide();
            background("Yellow");
            fill(0);
            textSize(30);
            text("Result of the Quiz",340,50);
            text("---------------------------",320,65);
            Contestant.getPlayerInfo();
            if(allContestents !== undefined){
            debugger;
            var display_answer=320;
            fill("blue");
            textSize(20);
            text("NOTE: Contestant who answered correct are highlighted in green color!",130,230);

            for(var plr in allContestents){
            debugger;
            var correctAns="2";

            if(correctAns===allContestents[plr].answer){
              fill("green");
            }else{
                fill("red");
                display_Answers+=30;
                textSize(20);
                text(allContestents[plr].name+":"+allContestents[plr].answer,250,display_Answers);
            }
            }
            }

        }
    }
