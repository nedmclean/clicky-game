import React, { Component } from "react";
import Card from "./components/card";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import matched from "./octocards.json";
import "./App.css";

let click = "Click, babe!";

let correct = 0;

let topScore = 0;

  class App extends Component {
    
    state = {
          correct,
          click,
          matched,
          topScore
        
    };

setClicked = id => {

        const matched = this.state.matched;

        const clickedMatch = matched.filter(match => match.id === id);

        if (clickedMatch[0].clicked){

            console.log ("Correct: " + correct);
            console.log ("Best: " + topScore);

            correct = 0;
            click = "WRONG! TRY AGAIN! You can do it!"

            for (let i = 0 ; i < matched.length ; i++){
                matched[i].clicked = false;
            }

            this.setState({click});
            this.setState({ correct });
            this.setState({matched});


        } 
        else {

         correct++;
            clickedMatch[0].clicked = true;

            
            click = "Helluva Click!";


            if (correct > topScore){
                  topScore = correct;
                
                this.setState({ topScore });
            }


            matched.sort(function(){return 0.5 - Math.random()});
 
                this.setState({ matched });
                
                this.setState({correct}); 
                
                this.setState({click});
        }
    };

    render() {
        return (
            <Wrapper>
                <Title>Behold the Sea! And Its Many Fluffy Critters! Get to Clicking. </Title>
                {this.state.matched.map(match => (
                      <Card
                        setClicked={this.setClicked} key={match.id} id={match.id} image={match.image}
                    />
                ))}

                <div>
                <h2 className="score">
                    How well can you remember your invertebrates?! Click on each once; a second click on any returns your score to zero!
                </h2>
                
                <h2 className="score">
                    {this.state.click}
                </h2>
                
                <h2 className="score">
                    Correct Guesses: {this.state.correct} 
                </h2>
                
                <h2 className="score">
                    Best Score: {this.state.topScore} 
                </h2>
                </div>
                
            </Wrapper>
        );
    }
}
export default App;
