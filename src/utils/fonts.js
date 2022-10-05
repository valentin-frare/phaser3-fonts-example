export default class FontsTool
{
    static loadFont(name, path) {
        var newFont = new FontFace(name, `url("${path}")`);
        newFont.load().then(function (loaded) {
            document.fonts.add(loaded);
        }).catch(function (error) {
            console.log(error);
        });
    }
}