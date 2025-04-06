namespace SpriteKind {
    export const object = SpriteKind.create()
    export const object2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    music.stopAllSounds()
    game.setGameOverPlayable(true, music.melodyPlayable(music.smallCrash), false)
    game.gameOver(true)
})
info.onCountdownEnd(function () {
    info.stopCountdown()
    game.setGameOverMessage(true, "YOU SURVIVE!")
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverPlayable(false, music.melodyPlayable(music.spooky), true)
    music.stopAllSounds()
    mySprite.setFlag(SpriteFlag.AutoDestroy, true)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.object2, function (sprite, otherSprite) {
    MyEnemy.follow(mySprite, 130)
})
let MyEnemy: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`gb`)
mySprite = sprites.create(assets.image`fg`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(29, 92)
mySprite.sayText("")
MyEnemy = sprites.create(img`
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . f f 1 f f . . . . . . 
    . . . . . 2 1 1 1 2 . . . . . . 
    . . . . . 2 1 f 1 2 . . . . . . 
    . . . . . 2 1 f 1 2 . . . . . . 
    . . . . . 2 1 f 1 2 . . . . . . 
    . . . . . 2 1 f 1 2 . . . . . . 
    . . 1 f f 2 f 1 f 2 f f 1 . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . 2 f f f 2 . . . . . . 
    . . . . . 2 f . f 2 . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    `, SpriteKind.Enemy)
MyEnemy.setPosition(151, 97)
music.play(music.createSong(hex`0078000408020501001c000f05001202c102c2010004050028000000640028000314000602000425000400080002191b10001400012018001c00012020002400012028002c00012030003400012002001c000c960064006d019001000478002c010000640032000000000a060005540008000c00011d0c001000011910001400011d14001800011918001c00011d1c002000011920002400011d24002800011928002c00011d2c003000011930003400011d34003800011938003c00011d3c004000011905001c000f0a006400f4010a00000400000000000000000000000000000000022b000000040002191b10001400012c18001c00012c20002400012c28002c00012c30003400012c38003c00012c06001c00010a006400f4016400000400000000000000000000000000000000021e002c003000011b30003400011b34003800011b38003c00011b3c004000011b08001c000e050046006603320000040a002d0000006400140001320002010002540008000c0001190c001000011d10001400011914001800011d18001c0001191c002000011d20002400011924002800011d28002c0001192c003000011d30003400011934003800011d38003c0001193c004000011d`), music.PlaybackMode.LoopingInBackground)
mySprite.startEffect(effects.halo, 500)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . e e e 5 e e e . . . . . 
    . . . e e e 5 5 5 e e e . . . . 
    . . e e e e e 5 e e e e e . . . 
    . e e e e e e 5 e e e e e e . . 
    . . . e e e e e e e e e . . . . 
    . . . e e e e e e e e e . . . . 
    . . . e e e f f f e e e . . . . 
    . . . e e e f f f e e e . . . . 
    . . . e e e f f f e e e . . . . 
    `, SpriteKind.object)
mySprite2.setPosition(7, 92)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b b b . . . . . 
    . . . . . . . b b b b b . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.object2)
mySprite3.setPosition(100, 92)
game.onUpdate(function () {
	
})
