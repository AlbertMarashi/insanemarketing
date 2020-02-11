<template>
    <web>
        <template slot="title">Page Not Found</template>
        <template slot="content">
            <div class="wrapper">
                <div class="subtitle">
                    Oops
                </div>
                <h1 class="big-text">
                    Page Not Found
                </h1>
                <p>
                    <a href="https://promatia.com">Return to the Home Page</a>
                </p>
            </div>
        </template>
    </web>
</template>
<style lang="stylus" scoped>
.subtitle
    font-weight 500
    font-size 1.2em
.big-text
    margin 0

.wrapper
    padding 80px 40px
    max-width: 1000px
    margin: auto

</style>
<script>
import web from '@/layouts/web'

export default {
    async serverPrefetch () {
        this.$ssrContext.ctx.status = 404
    },
    components: {
        web
    }
}
</script>
