<template>
    <footer>
        <div class="inner-footer">
            <div class="contact">
                <a class="list-item" href="tel:0451492663"><Phone class="icon"/> <div class="text">0451 492 663</div></a>
                <a class="list-item" href="mailto:hello@insanemarketing.com.au"><Email class="icon"/> <div class="text">hello@insanemarketing.com.au</div></a>
                <a class="list-item"><MapMarker class="icon"/> <div class="text">855 Portrush Road, Glen Osmond SA, 5064</div></a>
            </div>
            <div class="business">
                <strong>ABN: </strong>97 548 116 952
            </div>
        </div>
    </footer>
</template>
<style lang="stylus" scoped>
@import "~@/assets/stylus/variables"

footer
    padding 40px 0
    background mix($main, #22, 5%)
    color white

.inner-footer
    col-12()
    .contact
        grid-area 1 / 2 / span 1 / span 7
        @media (max-width $tablet)
            grid-area 1 / 1 / span 1 / span 12
    .business
        grid-area 1 / 9 / span 1 / span 3
        text-align right
        @media (max-width $tablet)
            grid-area 2 / 1 / span 1 / span 12


.icon
    background $main
    display flex
    margin 0 4px
    height 40px
    width 40px
    color white
    justify-content center
    align-items center
    border-radius 50px

.list-item
    display flex
    margin 10px 0
    align-items center
    .text
        padding-left 10px
        flex 1
        color white

</style>
<script>
import MapMarker from 'icons/MapMarker'
import Phone from 'icons/Phone'
import Email from 'icons/Email'

export default {
    components: {
        MapMarker,
        Email,
        Phone
    }
    
}
</script>
