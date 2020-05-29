<script>
  import menuData from '../data.json'
  console.log('data', menuData)
  export default {
    name: "test",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    render() {
      return (
              <el-menu
                      default-active="/model/quikeStart"
                      class="el-menu-vertical-demo show"
                      open={this.handleOpen}
                      close={this.handleClose}
                      router={true}
              >
                { menuData.listData.map((res, index) => {
                  return <el-submenu index={String(index)}>
                    <template slot="title">
                      <span>{res.label}</span>
                    </template>
                    <el-menu-item-group>
                      { res.children.map((data) =>{
                        return <el-menu-item index={data.path}>{data.label}</el-menu-item>
                      })}
                    </el-menu-item-group>
                  </el-submenu>
                })}
              </el-menu>
      )
    }
  }
</script>

<style scoped>
  .show{
    width: 200px;
  }
</style>
