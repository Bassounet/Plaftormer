class mechant extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "mechant");
        this.body.allowGravity=true;
        this.flipX=true;
        this.setGravityY(40);
       

        //gestion de la taille
        this.setDisplaySize(45,65);

        //on réduit un peu la zone de hit
        this.setOffset(0,0);// ici on règle le point de référence du départ réglage de noter hitbox ... 
        this.setBounceX(1);
        this.setVelocityX(50);
        this.setCollideWorldBounds(true)


        this.originalX=x;
        this.minX=x-50;
        this.maxX=x+50;

        // Y
        this.originalY=y;
        this.minY=y-5;
        this.maxY=y+5;

        // on applique les propriété du début de l'animation
        this.x=this.minX;
        this.y=this.minY;
        
        let me=this;

        scene.tweens.add({
            targets:this,
            duration:0,
            delay:Math.random()*800,
            alpha:{
                startDelay:Math.random()*5000,
                from:0,
                to:1,
            },
            onComplete: function () {
                me.start();
            }
        })
        
    }


    start(){
        this.scene.tweens.add({
            targets: this,
            x: {
                from: this.minX,
                to:this.maxX,
                duration: 2000,
                ease: 'Sine.easeInOut',
                yoyo: -1,
                repeat:-1,
                flipX:true,
            },
            // y: {
            //     from: this.minY,
            //     to:this.maxY,
            //     duration: 500,
            //     ease: 'Sine.easeInOut',
            //     yoyo: -1,
            //     repeat:-1
            // }
        });

       
    }
}