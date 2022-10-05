import Phaser from 'phaser'
import FontsTool from '../utils/fonts';

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        // @ts-ignore
        WebFont.load({
            google: {
                families: ['Droid Sans', 'Droid Serif']
            }
        });

        console.log(FontsTool.loadFont('Fuentecita-ttf', 'assets/fonts/Joynoted Demo.ttf'));
        console.log(FontsTool.loadFont('Fuentecita-otf', 'assets/fonts/Gemini Moon.otf'));

        this.load.setBaseURL('http://labs.phaser.io')

        this.load.image('sky', 'assets/skies/space3.png')
        this.load.image('logo', 'assets/sprites/phaser3-logo.png')
        this.load.image('red', 'assets/particles/red.png')
    }

    create()
    {
        this.add.image(400, 300, 'sky')

        const particles = this.add.particles('red')

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        })

        const logo = this.physics.add.image(400, 100, 'logo')

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)

        emitter.startFollow(logo)

        this.add.text(400, 100, 'Wenas, fuente de Google', {
            fontFamily: 'Droid Sans',
            fontSize: '42px',
            backgroundColor: "#ff0000"
        }).setOrigin(.5);
        this.add.text(400, 200, 'Wenas, fuente otf local', {
            fontFamily: 'Fuentecita-ttf',
            fontSize: '42px',
            backgroundColor: "#ff0000"
        }).setOrigin(.5);
        this.add.text(400, 300, 'Wenas, fuente ttf local', {
            fontFamily: 'Fuentecita-otf',
            fontSize: '42px',
            backgroundColor: "#ff0000"
        }).setOrigin(.5);
    }
}
