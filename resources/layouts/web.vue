<template>
    <minimal>
        <template slot="title">{{ this.$slots.title ? `${ this.$slots.title[0].text } - Insane Marketing`: `Insane Marketing | SEO Adelaide` }}</template>
        <template slot="description"><slot name="description"/></template>
        <template slot="head">
            <slot name="head"/>
        </template>
        <template slot="content">
            <headerComponent/>
            <div class="content-wrapper"><slot name="content"/></div>
            <footerComponent/>
        </template>
    </minimal>
</template>
<style lang="stylus" scoped>

</style>
<script>
import minimal from '@/layouts/minimal'
import headerComponent from '@/includes/header'
import footerComponent from '@/includes/footer'

export default {
    components: {
        minimal,
        headerComponent,
        footerComponent
    }
}
</script>
