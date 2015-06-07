var game = new Phaser.Game(480, 480, Phaser.AUTO, 'phaser-example', {
    preload: preload, create: create, update: update, render: render
});

function preload() {
    game.load.image('ground_1x1', 'assets/ground_1x1.png');
    game.load.spritesheet('pikachu', 'assets/Pikachu.png', 32, 32);
}

var map;
var layerWalls;
var player;

function create() {

    game.stage.backgroundColor = '#E2E2E2';

    map = game.add.tilemap();

    map.addTilesetImage('ground_1x1');

    layerWalls = map.create('layer-walls', 15, 15, 32, 32);

    //  Resize the world
    layerWalls.resizeWorld();

    for (var i=0; i<map.height;i++) {
        for (var j = 0; j < map.width; j++) {
            if (i == 0 || j == 0 || (i == map.height - 1) || (j == map.width - 1)) {
                map.putTile(10, i, j, layerWalls);
            }
        }
    }

    map.setCollisionBetween(10, 10);

    //  Player
    player = game.add.sprite(50, 50, 'pikachu', 1);
    player.animations.add('left', [3,4,5], 10, true);
    player.animations.add('right', [6,7,8], 10, true);
    player.animations.add('up', [9,10,11], 10, true);
    player.animations.add('down', [0,1,2], 10, true);

    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.setSize(17, 24, 6, 4);

    game.camera.follow(player);

    //  Allow cursors to scroll around the map
    cursors = game.input.keyboard.createCursorKeys();
}

function update() {

    game.physics.arcade.collide(player, layerWalls);

    player.body.velocity.set(0);

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -100;
        player.play('left');
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 100;
        player.play('right');
    }
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -100;
        player.play('up');
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 100;
        player.play('down');
    }
    else
    {
        player.animations.stop();
    }
}

function render() {
}

function Main()
{

}
