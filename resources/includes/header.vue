<template>
    <header>
        <div class="announcement-bar">
            Our new website is being built, check back in a few months!
        </div>
        <div class="header-container">
            <div class="header">
                <div class="container">
                    <a href="/">
                        <img src="@/assets/images/logo.png" alt="">
                    </a>
                    <div class="margin-left">
                        <a class="icon" href="tel:0451492663">
                            <Phone :size="28"/>
                        </a>
                        <a class="icon" href="mailto:hello@insanemarketing.com.au">
                            <Email :size="28"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="stylus" scoped>
@import "~@/assets/stylus/variables"

$headerBackground = mix($main, #040404, 13%)

header
    box-shadow 0 0 5px rgba(0,0,0,0.1)
    position sticky
    top 0

.header-container
    padding 10px 0
    background white

.announcement-bar
    color white
    background #991111
    font-weight 500
    font-size 18px
    padding 4px
    text-align center

.header
    col-12()
    .container
        grid-area 1 / 2 / span 1 / span 10
        display flex
        align-items center
        @media (max-width: $tablet)
            grid-area 1 / 1 / span 1 / span 12
        img
            max-height 70px
            display flex

.icon
    background $main
    display inline-flex
    margin 0 4px
    height 45px
    width 45px
    color white
    justify-content center
    align-items center
    border-radius 50px
    box-shadow 0 0 3px 0 rgba(0,0,0,0.1), 0 5px 5px -2px rgba(0,0,0,0.2)

</style>
<script>
import Phone from 'icons/Phone'
import Email from 'icons/Email'

export default {
    components: {
        Phone,
        Email
    }
}

</script>
