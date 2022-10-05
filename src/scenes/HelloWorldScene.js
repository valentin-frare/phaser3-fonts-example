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

        FontsTool.loadFont('Fuentecita-ttf', 'assets/fonts/Joynoted Demo.ttf');
        FontsTool.loadFont('Fuentecita-otf', 'assets/fonts/Gemini Moon.otf');
    }

    create()
    {
        this.add.text(200, 100, 'Fuente ttf local', {
            fontFamily: 'Avigea',
            fontSize: '42px',
            backgroundColor: "#ff0000"
        }).setOrigin(.5);
        this.add.text(200, 200, 'Fuente otf local', {
            fontFamily: 'PeopleBook',
            fontSize: '42px',
            backgroundColor: "#ff0000"
        }).setOrigin(.5);

        this.add.text(600, 100, 'Fuente de Google', {
            fontFamily: 'Droid Sans',
            fontSize: '42px',
            backgroundColor: "#ff0000"
        }).setOrigin(.5);
        this.add.text(600, 200, 'Fuente otf local', {
            fontFamily: 'Fuentecita-ttf',
            fontSize: '42px',
            backgroundColor: "#ff0000"
        }).setOrigin(.5);
        this.add.text(600, 300, 'Fuente ttf local', {
            fontFamily: 'Fuentecita-otf',
            fontSize: '42px',
            backgroundColor: "#ff0000"
        }).setOrigin(.5);
    }
}
