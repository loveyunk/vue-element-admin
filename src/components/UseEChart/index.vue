<template>
  <div class="chart-container">
    <div v-if="!isEmptyData" class="header">
      <h3 v-if="title" class="title">{{ title }}</h3>
      <slot v-if="$slots.default" />
    </div>
    <v-chart
      v-if="!isEmptyData"
      ref="chart"
      theme="cy-theme"
      class="chart"
      :style="chartStyles"
      :class="chartClass"
      @click="handleChartClick"
    />
  </div>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import { isEmpty } from '../../utils';
import theme from '../../utils/echarts-theme.json';

ECharts.registerTheme('cy-theme', theme);

export default {
  name: 'UseChart',
  components: {
    'v-chart': ECharts
  },
  props: {
    dataSource: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    height: {
      type: [String, Number]
    },
    chartClass: {
      type: String
    }
  },
  computed: {
    chartStyles() {
      const style = {};
      if (this.height) {
        style.height = this.height;
      }
      return style;
    },
    isEmptyData() {
      return isEmpty(this.dataSource);
    }
  },
  watch: {
    dataSource: {
      handler(data) {
        if (!this.isEmptyData) {
          this.$nextTick(() => {
            const { chart } = this.$refs;
            chart.mergeOptions(data, true);
          });
        }
      },
      deep: true,
      immediate: true
    },
    loading(val) {
      if (!this.isEmptyData) {
        this.$nextTick(() => {
          const { chart } = this.$refs;
          if (val) {
            chart.showLoading({
              text: 'loading',
              color: '#4D87FA',
              textColor: '#000'
            });
          } else {
            chart.hideLoading();
          }
        });
      }
    }
  },
  methods: {
    handleChartClick(val) {
      this.$emit('on-click', val);
    }
  }
};
</script>

<style lang="scss" scoped>
.chart-container {
  .header {
    display: flex;
    align-items: baseline;
    padding-bottom: 10px;
    .title {
      font-size: 14px;
      color: #606266;
      line-height: 16px;
      padding: 5px 0;
      margin-right: 20px;
    }
  }
  .chart {
    width: 100%;
    border: 1px solid #dcdfe6;
    border-radius: 1px;
  }
}
</style>
