<template>
    <div class="base-show">
        <el-aside class="base-aside">
            <menu-model />
        </el-aside>
        <el-main style="width: 1000px">
            <router-view />
        </el-main>
    </div>
</template>

<script>
    import MenuModel from './menu'

    export default {
        name: "show",
        components:{
            MenuModel
        }
    }
</script>

<style scoped lang="scss">
    .base-show{
        display: flex;
        margin-top: 20px;
        .base-aside{
            width: 200px!important;
            height: 100%;
        }
    }
</style>
<style lang="scss">
    .base-show{
        .el-menu {
            border: 0 !important;
        }
    }
</style>
