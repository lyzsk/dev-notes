# Assign NPW Lot 时 NPW Status Finish, PE Finish 但是 MES 没有 Complete Y/N

Assign 2 seq 全部 Finish, 但是确实没有 Compelte Y/N, 前端字段为空

可能是逻辑有误, 可能是之前 buffer 手动修改导致之前的可以 Finish 后 Complete = Y

先 manual close

查 traceId 对应 es log 得到结论, 误删了 seq 3, 导致前端只显示 2 个 seq, 实际有一个没 finish

# running 时尝试 split lot

因为嫌慢, 想要 running 时逻辑 split lot, 但是通过测试有 MES 卡控, 无法逻辑分. 且即使想也会因权限 MFG 无法 split, 只能 diff 做

# RTD 有 TraceId 但是 SDR 无 TraceId

RTD TraceId 分长短码, RTD 有 TraceId, 前端可以查询, 但是 SDR 仅可通过 RTD 的 TraceId 对应的 EQPId 查询相关数据

SDR 的 traceId 是纯数字的

# APC etch dummy 无法创建

因为 MES 代码 if isDummyEQPIsEmpty
