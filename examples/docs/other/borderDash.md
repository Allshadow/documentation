# 虚线效果

<style lang="scss" scoped>
    .text{
       text-align: center;
       padding: 10px;
    }
    .dotted-line{
        border: 1px dashed transparent;
        background: linear-gradient(white,white) padding-box, repeating-linear-gradient(-45deg,#ccc 0, #ccc .25em,white 0,white .75em);
    }
</style>

:::demo
``` html
<template>
  <div class="dotted-line text">
    <div>离离原上草，一岁一枯荣</div>
    <div>野火烧不尽，春风吹又生</div>
   </div>
</template>
<style lang="scss" scoped>
    .text{
       text-align: center;
       padding: 10px;
    }    

    .dotted-line{
        border: 1px dashed transparent;
        background: linear-gradient(white,white) padding-box, repeating-linear-gradient(-45deg,#ccc 0, #ccc .25em,white 0,white .75em);
    }
</style>
```
:::
