Main = function () {
    this.renderer = new PIXI.autoDetectRenderer(800, 600);

    document.body.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();

    var bunnyTexture = PIXI.Texture.fromImage('05.png');
    this.bunny = new PIXI.Sprite(bunnyTexture);

    this.bunny.position.x = 400;
    this.bunny.position.y = 300;
    this.bunny.scale.x = 1;
    this.bunny.scale.y = 1;

    this.stage.addChild(this.bunny);

    this.animate = function() {
        requestAnimationFrame(this.animate.bind(this));

        // each frame we spin the bunny around a bit
        this.bunny.rotation += 0.01;

        // this is the main render call that makes pixi draw your container and its children.
        this.renderer.render(this.stage);
    }.bind(this);

    this.animate();
};
