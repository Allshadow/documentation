# 自定义复选框

<style scoped lang="scss">
    .checkbox-wrap input[type="checkbox"]{
        visibility: hidden;
        opacity: 0;
    }
    .checkbox-wrap .check-img{
        display: inline-block;
        position: relative;
        width: 13px;
        height: 13px;
        border: 1px solid #ddd;
        background-color: #fff;
        vertical-align: -2px;
        margin-right: 5px;
    }
    .checkbox-wrap input[type="checkbox"]:checked + .check-img:after{
        position: absolute;
        content: "";
        width:8px;
        height: 4px;
        border-left:2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(-45deg) translate(-50%,-50%);
        /*top:50%;*/
        left:50%;
    }
    .checkbox-wrap input[type="checkbox"]:checked + .check-img {
        background-color: #00B066;
    }
    .checkbox-wrap input[type="checkbox"]:disabled + .check-img{
        background-color: #e8e8e8;
        border:1px solid #979797;
    }
    .checkbox-wrap input[type="checkbox"]:disabled:checked + .check-img:after{
        border-color: #000;
    }
    .checkbox-wrap.checkbox-anim .check-img{
        -webkit-transition:background-color ease-in-out .3s;
        transition:background-color ease-in-out .3s;
    }
</style>

:::demo

```html
<template>
    <label class="checkbox-wrap checkbox-anim">
        <input type="checkbox" name="sex"><i class="check-img"></i>
    </label>
</template>
<style>
    .checkbox-wrap input[type="checkbox"]{
        visibility: hidden;
        opacity: 0;
    }
    .checkbox-wrap .check-img{
        display: inline-block;
        position: relative;
        width: 13px;
        height: 13px;
        border: 1px solid #ddd;
        background-color: #fff;
        vertical-align: -2px;
        margin-right: 5px;
    }
    .checkbox-wrap input[type="checkbox"]:checked + .check-img:after{
        position: absolute;
        content: "";
        width:8px;
        height: 4px;
        border-left:2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(-45deg) translate(-50%,-50%);
        /*top:50%;*/
        left:50%;
    }
    .checkbox-wrap input[type="checkbox"]:checked + .check-img {
        background-color: #00B066;
    }
    .checkbox-wrap input[type="checkbox"]:disabled + .check-img{
        background-color: #e8e8e8;
        border:1px solid #979797;
    }
    .checkbox-wrap input[type="checkbox"]:disabled:checked + .check-img:after{
        border-color: #000;
    }
    .checkbox-wrap.checkbox-anim .check-img{
        -webkit-transition:background-color ease-in-out .3s;
        transition:background-color ease-in-out .3s;
    }
</style>
```
:::
