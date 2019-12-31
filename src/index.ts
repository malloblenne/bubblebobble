import { Observable } from 'rxjs';
import 'phaser';
import { GameScene } from "./gameScene";



var observable = Observable.create((observer:any) => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.complete();
    observer.next('Bye');
})
observable.subscribe(
    (x:any) => logItem(x),
    (error: any) => logItem ('Error: ' + error),
    () => logItem('Completed')
);
function logItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}


/*
class SimpleGame {
    
        constructor() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
        }
    
        game: Phaser.Game;
    
        preload() {
            this.game.load.image('logo', 'phaser2.png');
        }
    
        create() {
            var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
        }
    
    }
    
    window.onload = () => {
    
        var game = new SimpleGame();
    
    };
    */

const config: Phaser.Types.Core.GameConfig = {  title: "TestGame",  width: 800,  height: 600,  parent: "game",  backgroundColor: "#18216D", scene: [GameScene]};
export class StarfallGame extends Phaser.Game {  constructor(config: Phaser.Types.Core.GameConfig) {    super(config);  }};
    
window.onload = () => {  var game = new StarfallGame(config);};
    