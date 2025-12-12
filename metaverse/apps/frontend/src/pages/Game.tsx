import { useEffect } from "react";
import Phaser from "phaser";
import playerImg from "../assets/Images/players/player.png";
import tileJson from "../assets/file/pelletTown.json";
import tileMap from "../assets/Images/map/tileset.png";
import redCollision from "../assets/Images/map/collision.png";

class MainScene extends Phaser.Scene {
  player!: Phaser.Physics.Arcade.Sprite;
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  keys!: Record<string, Phaser.Input.Keyboard.Key>;

  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.tilemapTiledJSON("map", tileJson);
    this.load.image("tiles", tileMap);
    this.load.image("collisions", redCollision);
    this.load.spritesheet("player", playerImg, {
        frameWidth: 32,
        frameHeight: 64,
    });
  }

  create() {
      
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("sceneSpriteSheet", "tiles");
    const tileset2 = map.addTilesetImage("Collisions", "collisions");
    this.cameras.main.setRoundPixels(true);
    
    if(tileset) {
        const oceanLayer = map.createLayer("Ocean", tileset, 0, 0);
        const islandLayer = map.createLayer("Island", tileset, 0, 0);
        const treesLayer = map.createLayer("Trees", tileset, 0, 0);
        const trees2Layer = map.createLayer("Trees 2", tileset, 0, 0);
        const trees3Layer = map.createLayer("Trees 3", tileset, 0, 0);
        const plateauLayer = map.createLayer("Plateau", tileset, 0, 0);
        const flowerLayer = map.createLayer("Flowers and Grass", tileset, 0, 0);
        const htreesLayer = map.createLayer("Objects/House Trees", tileset, 0, 0);
        const houseLayer = map.createLayer("Objects/House", tileset, 0, 0);
        const dockLayer = map.createLayer("Objects/Dock", tileset, 0, 0);
        const fenceLayer = map.createLayer("Objects/Fence", tileset, 0, 0);
        const bushesLayer = map.createLayer("Objects/Bushes", tileset, 0, 0);
        // const aboveLayer = map.createLayer("Above Player", tileset, 0, 0);
        
    }
    const collisionsLayer = map.createLayer("Collisions", tileset2!, 0, 0);
    collisionsLayer!.setCollisionByProperty({ collides: true });

    this.player = this.physics.add.sprite(400, 300, "player");
    this.player.setSize(12, 12);
    this.player.setOffset(10, 52); 
    this.player.setCollideWorldBounds(true);

    this.physics.add.collider(this.player, collisionsLayer!);
    const foreLayer = map.createLayer("Foreground Objects", tileset!, 0, 0);
        
    this.anims.create({
        key: "walk-down",
        frames: this.anims.generateFrameNumbers("player", { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: "walk-left",
        frames: this.anims.generateFrameNumbers("player", { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: "walk-up",
        frames: this.anims.generateFrameNumbers("player", { start: 6, end: 8 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: "walk-right",
        frames: this.anims.generateFrameNumbers("player", { start: 9, end: 11 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: "celeb",
        frames: this.anims.generateFrameNumbers("player", { start: 12, end: 15 }),
        frameRate: 10,
        repeat: -1,
    });


    if(this.input.keyboard) {
        this.cursors = this.input.keyboard.createCursorKeys();

        this.keys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
        }) as Record<string, Phaser.Input.Keyboard.Key>;
    }

    this.cameras.main.startFollow(this.player);

    // this.cameras.main.setBounds(0, 0, 2000, 2000);
    // this.physics.world.setBounds(0, 0, 2000, 2000);
    
    this.cameras.main.setZoom(3);
  }

  update() {
    const speed = 50;
    this.player.setVelocity(0);

    if (this.keys.space.isDown) {
        this.player.anims.play("celeb", true);
        return;
    }

    let moving = false;

    if (this.cursors.left.isDown || this.keys.left.isDown) {
        this.player.setVelocityX(-speed);
        this.player.anims.play("walk-left", true);
        moving = true;
    } else if (this.cursors.right.isDown || this.keys.right.isDown) {
        this.player.setVelocityX(speed);
        this.player.anims.play("walk-right", true);
        moving = true;
    }

    if (this.cursors.up.isDown || this.keys.up.isDown) {
        this.player.setVelocityY(-speed);
        this.player.anims.play("walk-up", true);
        moving = true;
    } else if (this.cursors.down.isDown || this.keys.down.isDown) {
        this.player.setVelocityY(speed);
        this.player.anims.play("walk-down", true);
        moving = true;
    }

    if (!moving) {
        this.player.anims.stop();
    }
  }
}

const Game = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 840,
      height: 600,
      parent: "phaser-container",
      pixelArt: true,
      render: { pixelArt: true, roundPixels: true, },
      physics: {
        default: "arcade",
        arcade: {
          gravity: {
              y: 0,
              x: 0
          },
          debug: false,
        },
      },
      scene: MainScene,
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-container" />;
};

export default Game;
