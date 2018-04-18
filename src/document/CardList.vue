<template>
    <div>
        <navComponent>
            <docComponent 
            title='title'
            subtitle='subtitle'
            slot="content"
            :direction='direction'
            :html='html'></docComponent>
        </navComponent>
    </div>
</template>
<script>

import navComponent from '../components/Nav';
import docComponent from '../components/Doc';

export default {
  data() {
    return {
        html:
            `<article class="c-card">
                <header onclick="location.href =
                '<%=basePath%>/v2/mobile/flightfocus/detail?
                fltSegDayId=#: fltSegDayId#&
                flightNo=#: flightNo#&
                flightDate=#=kendo.toString(new Date(lclDptDate),'yyyy-MM-dd')#'">
                    <h3 class="c-card-title">
                        #if(flightStatus==null){flightStatus=""}#
                        <span style="color:#:ShowCancel(isCancel,delayRank)#;">
                            <i class='fa #:showImg(dOrI)#'></i>
                            #:flightNo#
                        </span>
                        <span class="c-tag c-tag-normal">#:flightStatus#</span>
                    </h3>
                    <h4 class="c-card-subtitle">
                        #:orgCityAirp# -> #:dstCityAirp#
                    </h4>
                </header>
                <div class="c-card-row">
                    <div class="c-card-item">计划起飞: #=std#</div>
                    <div class="c-card-item">实际起飞:#if(atd==null){atd="未起飞"}#
                        <span style="color:#:showColor(comptime,alerts)#"> #:atd#</span>
                    </div>
                    <div class="c-card-item">计划到达: #:sta#</div>
                    <div class="c-card-item">实际到达:#if(ata==null){ata="未到达"}# #:ata#</div>
                </div>
                <div class="c-card-row">
                    <span class="c-card-item c-card-item_monney"><strong>￥11212</strong></span>
                    <span class="c-card-item c-card-item_remark">2016年 10月 20日</span>
                </div>
                <div class="c-card-row c-card-row_btn">
                    <i
                    class="iconfont icon-iconfontxihuan2 c-card-btn c-card-btn_atived"
                    aria-hidden="true"
                    onclick="addAtte(this)"
                    value="flightNo=3U610&amp;orgCityAirp=SVO&amp;dstCityAirp=CTU"></i>
                    <i class="iconfont icon-gongdan c-card-btn" aria-hidden="true"></i>
                </div>
            </article>`,
            title: '卡片列表',
            subtitle: '用于列表展示',
            direction: '用于列表展示',
    };
  },
  components: {
    navComponent,
    docComponent,
  },
};
</script>
