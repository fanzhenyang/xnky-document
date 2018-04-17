<template>
    <el-row class="tac">
    <el-col :span="4">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="2">
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <span slot="title">导航四</span>
        </el-menu-item>
        </el-menu>
    </el-col>
    <el-col :span="20">
        <slot></slot>
    </el-col>
    </el-row>
</template>


<script>
export default {
  name: 'navComponent',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
