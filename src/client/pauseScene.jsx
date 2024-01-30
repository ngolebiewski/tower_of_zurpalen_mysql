//pauseScene.jsx

import eventsCenter from "./EventsCenter.jsx";
import { CST } from "./loading_menu/CST.jsx";
import { store } from "./store"; // brings in redux store



export class PauseScene extends Phaser.Scene {
  constructor(){
      super({
          key: CST.SCENES.PAUSE
      })    
      fontFamily:'p-script'

    this.gameOver=false;
    this.characterName="";
    this.characterHealth = 0;
    this.characterMaxHealth = 0;
    this.characterArmor = 0;
    this.characterAttack = 0;
    this.characterSpeed = 0;
    this.characterXp = 0;
    this.characterLevel = 0;
    this.characterGold=0;
    this.loadedCharacterStats = false;
    this.head_gear1 = 7;
    this.left_hand_gear2=7;
    this.right_hand_gear3=7;
    this.foot_gear4 =7;
    this.chest_gear5=7;
    this.backpack1 =7;
    this.backpack2 =7;
    this.backpack3 =7;
    this.backpack4 =7;
    this.backpack5 =7;
    this.backpack6 =7;
    this.backpack7 =7;
    this.backpack8 =7;
    
    // this.playButton;
    // this.saveButton;
    // this.quitButton;
  }
  

init(){

}


preload ()
{

    const state = store.getState() // this brings in the state from redux

    //bring in values of the character from state:
    if(!this.loadedCharacterStats){
    this.characterName=state.userCharacter.character.name;
    this.characterHealth += state.userCharacter.character.currentHP;
    this.characterMaxHealth += state.userCharacter.character.maxHP;
    this.characterArmor += state.userCharacter.character.base_armor;
    this.characterAttack += state.userCharacter.character.base_attack;
    this.characterSpeed += state.userCharacter.character.base_speed;
    this.characterXp += state.userCharacter.character.xp;
    this.characterLevel += state.userCharacter.character.level;
    this.characterGold += state.userCharacter.character.gold;
    this.loadedCharacterStats = true;
    this.head_gear1 = state.userCharacter.character.head_gear1;
    this.left_hand_gear2=state.userCharacter.character.left_hand_gear2;
    this.right_hand_gear3=state.userCharacter.character.right_hand_gear3;;
    this.foot_gear4 =state.userCharacter.character.foot_gear4;
    this.chest_gear5=state.userCharacter.character.chest_gear5;
    this.backpack1 =state.userCharacter.character.backpack1;
    this.backpack2 =state.userCharacter.character.backpack2;
    this.backpack3 =state.userCharacter.character.backpack3;
    this.backpack4 =state.userCharacter.character.backpack4;
    this.backpack5 =state.userCharacter.character.backpack5;
    this.backpack6 =state.userCharacter.character.backpack6;
    this.backpack7 =state.userCharacter.character.backpack7;
    this.backpack8 =state.userCharacter.character.backpack8;



    }

    console.log('this is state.gear[6]: ', state.gear.allPossibleGear[this.right_hand_gear3].graphicUrl) // test to see gear

    switch(state.userCharacter.character.character_class){
        case "warrior":
            this.load.image('playerPauseScene', '/assets/pauseAssets/knightPauseScene.png');
            break;
        case "mage":
            this.load.image('playerPauseScene', '/assets/pauseAssets/magePauseScene.png');
            break;
        case "rogue":    
            this.load.image('playerPauseScene', '/assets/pauseAssets/roguePauseScene.png');
            break;
    }

    this.load.spritesheet('playButton', 'assets/pauseAssets/playButton110x60.png', { frameWidth: 110, frameHeight: 60 });
    this.load.spritesheet('saveButton', 'assets/pauseAssets/saveButton110x60.png', { frameWidth: 110, frameHeight: 60 });
    this.load.spritesheet('quitButton', 'assets/pauseAssets/quitButton110x60.png', { frameWidth: 110, frameHeight: 60 });
    this.load.spritesheet('sword','assets/levelAssets/swordIcon25x48.png', {frameWidth: 25, frameHeight: 48}) ;
    this.load.spritesheet('empty','assets/levelAssets/emptySlot50x50.png', {frameWidth: 50, frameHeight: 50}) ;
    this.load.spritesheet('swordSlot', 'assets/pauseAssets/swordSlot50x50.png', { frameWidth: 50, frameHeight: 50 });



}

create ()
{
    const state = store.getState() // this brings in the state from redux

console.log ('top of create: in the right hand of the character is: ', this.right_hand_gear3);
// console.log('this is state.gear.allPossibleGear[this.right_hand_gear3].graphicUrl: ', state.gear.allPossibleGear[this.right_hand_gear3].graphicUrl);

    eventsCenter.on('updateGold', (moreGold)=> {
        console.log('updateGold event triggered with amount:', moreGold);
        this.characterGold +=moreGold;
        this.characterXp += Math.round(moreGold/2);

    }, this);

    eventsCenter.on('lootedItem', (item)=>{
        console.log('in the pause Scene, the looted item is a ', item);
        if(item === 'lootsword'){
                    this.right_hand_gear3 = 1;
        }
        console.log ('in the right hand of the character is: ', this.right_hand_gear3);

    })


    // ***************  this is a test to see if the emitter is working correctly ************************************
    eventsCenter.on('Test', ()=>{
        console.log('Test Emitter is working');
    }, this);
            

    //  A background for our pause Screen
    this.add.image(800, 600, 'playerPauseScene');

    this.add.text(630, 380, this.characterName, { font: "20px p-script", fill: "#7e4035" });
    this.add.text(640, 425, this.characterHealth, { font: "30px p-script", fill: "#7e4035" });
    this.add.text(680, 425, '/' + this.characterMaxHealth, { font: "30px p-script", fill: "#7e4035" });
    this.add.text(640, 480, this.characterArmor, { font: "30px p-script", fill: "#7e4035" });
    this.add.text(640, 530, this.characterAttack, { font: "30px p-script", fill: "#7e4035" });
    this.add.text(640, 580, this.characterSpeed, { font: "30px p-script", fill: "#7e4035" });
    this.add.text(850, 370, this.characterXp, { font: "30px p-script", fill: "#7e4035" });
    this.add.text(850, 425, this.characterLevel, { font: "30px p-script", fill: "#7e4035" });
    this.add.text(850, 480, this.characterGold, { font: "30px p-script", fill: "#7e4035" });

    this.add.sprite(941,479, state.gear.allPossibleGear[this.head_gear1].graphicUrl); // head
    this.add.sprite(852,638, state.gear.allPossibleGear[this.left_hand_gear2].graphicUrl); // left hand
    this.add.sprite(1054,626, state.gear.allPossibleGear[this.right_hand_gear3].graphicUrl); // right hand
    this.add.sprite(943,729, state.gear.allPossibleGear[this.foot_gear4].graphicUrl); // feet
    this.add.sprite(943,654, state.gear.allPossibleGear[this.chest_gear5].graphicUrl); // chest

    this.add.sprite(557,688, state.gear.allPossibleGear[this.backpack1].graphicUrl); // backpack 1
    this.add.sprite(611,688, state.gear.allPossibleGear[this.backpack2].graphicUrl); // backpack 2
    this.add.sprite(662,688, state.gear.allPossibleGear[this.backpack3].graphicUrl); // backpack 3
    this.add.sprite(709,688, state.gear.allPossibleGear[this.backpack4].graphicUrl); // backpack 4

    this.add.sprite(557,742, state.gear.allPossibleGear[this.backpack5].graphicUrl); // backpack 5
    this.add.sprite(611,742, state.gear.allPossibleGear[this.backpack6].graphicUrl); // backpack 6
    this.add.sprite(662,742, state.gear.allPossibleGear[this.backpack7].graphicUrl); // backpack 7
    this.add.sprite(709,742, state.gear.allPossibleGear[this.backpack8].graphicUrl); // backpack 8





    // if(this.right_hand_gear3 === 1){
    //     this.add.sprite(1054,626, sword);
    




    //  Input Events
    this.keys = this.input.keyboard.addKeys({
    //   w: Phaser.Input.Keyboard.KeyCodes.W,
    //   a: Phaser.Input.Keyboard.KeyCodes.A,
    //   s: Phaser.Input.Keyboard.KeyCodes.S,
    //   d: Phaser.Input.Keyboard.KeyCodes.D,
      k: Phaser.Input.Keyboard.KeyCodes.K,
      p: Phaser.Input.Keyboard.KeyCodes.P,

  
     });


    this.input.keyboard.on('keydown-P', function (event) {
        this.scene.resume("LEVEL1");
        this.scene.stop("PAUSE");
    }, this);



    // this.playButton = this.physics.add.staticSprite(580,865, 'playButton').setInteractive();
    const playButton = this.add.sprite(580,865, 'playButton').setInteractive();
    const saveButton = this.add.sprite(815,860, 'saveButton').setInteractive();
    const quitButton = this.add.sprite(1018,860, 'quitButton').setInteractive();

    playButton.on('pointerup', function(event){
        this.scene.resume("LEVEL1");
        this.scene.stop("PAUSE");
    }, this);

    saveButton.on('pointerup', function(event){
        console.log('save the game function required')
    }, this);

    quitButton.on('pointerup', function(event){
        console.log('quit the game function required')
        // may need to emit this to the current scene
        eventsCenter.emit('gameOver', true);

    }, this);


};

update ()
{
    // if (this.gameOver)
    // {
    //     return;
    // }

    // if (this.keys.a.isDown)
    // {
    // }
    // else if (this.keys.d.isDown)
    // {
    // }
    // else
    // {
    // }
    // if(this.keys.w.isDown)
    // {
    // }
    // else if(this.keys.s.isDown)
    // {
    // }
    // else
    // {
    // }

    if (this.keys.k.isDown)
    {
        console.log('k is pressed, attacking now');
    }

    if (this.keys.p.isDown)
    {
        console.log('p is pressed, resuming game');
          this.scene.pause("PAUSE");
          this.scene.launch("LEVEL1");
    }

}
}
