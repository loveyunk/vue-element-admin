<template>
  <div class="filter-container">
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <el-input
          v-model="name"
          clearable
          suffix-icon="el-icon-search"
          @keyup.native.enter="handleQuery"
          @clear="handleQuery"
        ></el-input>
      </el-col>
      <el-col :span="17">
        <el-row type="flex" justify="space-between">
          <div>
            <el-button type="primary" @click="handleQuery">搜索</el-button>
            <el-button @click="handleReset">重置</el-button>
          </div>
          <el-button @click="handleAdd">创建</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'UserFilter',
  props: {
    filter: {
      type: Object,
      default() {
        return {};
      }
    },
    onFilterChange: {
      type: Function,
      default() {
        return () => {};
      }
    }
  },
  data() {
    return {
      name: this.filter.name
    };
  },
  watch: {
    filter({ name }) {
      this.name = name;
    }
  },
  methods: {
    handleFields() {
      return {
        ...this.$data
      };
    },
    handleReset() {
      // eslint-disable-next-line no-restricted-syntax
      for (const key in this.$data) {
        // eslint-disable-next-line no-prototype-builtins
        if (this.$data.hasOwnProperty(key)) {
          if (this.$data[key] instanceof Array) {
            this.$data[key] = [];
          } else {
            this.$data[key] = undefined;
          }
        }
      }
      this.handleSubmit();
    },
    handleQuery() {
      const filter = this.handleFields();
      this.onFilterChange(filter);
    },
    handleAdd() {
      this.$emit('on-add');
    }
  }
};
</script>
