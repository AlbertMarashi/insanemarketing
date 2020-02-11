<template>
    <web>
        <template slot="head">

        </template>
        <template slot="description"></template>
        <template slot="content">
            <div class="hero">
                <div class="inner-hero">
                    <div class="hero-container">
                        <h1>SEO Services Adelaide</h1>
                        <div class="Thick label">Are you ready?</div>
                        <p>
                            Interested in generating $10,000's monthly for your business on Google?
                        </p>
                        <p>
                            We've helped companies large and small in Adelaide generate millions in revenue yearly, and are experienced in technical SEO, web development and digital advertising.
                        </p>
                        <p>Shoot us an email, we'll come to you and explain how it works. No obligations</p>
                        <a class="button" href="mailto:hello@insanemarketing.com.au">Email Us <Email class="padding-left"/></a>
                        <a class="button" href="tel:0451492663">Call Us <Phone class="padding-left"/></a>
                    </div>
                </div>
            </div>
        </template>
    </web>
</template>
<style lang="stylus" scoped>
@import "~@/assets/stylus/variables"

.hero-container
    max-width 800px

.hero
    background linear-gradient(90deg, $main, darken($main, 40%))
    color white
    .inner-hero
        padding 15vh 20px
        max-width $tablet
        margin auto
        h1
            font-size 3em
            font-weight 700
            margin 10px 0

.label
    background white
    padding 8px 16px
    color $main
    display inline-flex
    font-weight 600
    font-size 1.5em
    border-radius 10px

.button
    background darken($main, 40%)
    display inline-flex
    align-items center
    margin 0 8px
    padding 8px 12px
    font-size 20px
    box-shadow 0 0 5px rgba(0,0,0,0.2), 0 9px 5px -8px rgba(0,0,0,0.3)
    font-weight 500
    border-radius 5px
    color white

.padding-left
    padding-left 8px

</style>
<script>
import web from '@/layouts/web'
import Phone from 'icons/Phone'
import Email from 'icons/Email'

export default {
    components: {
        web,
        Phone,
        Email
    }
}

</script>
