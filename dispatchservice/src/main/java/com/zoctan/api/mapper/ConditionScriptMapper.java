package com.zoctan.api.mapper;

import com.zoctan.api.core.mapper.MyMapper;
import com.zoctan.api.entity.ConditionScript;
import org.apache.ibatis.annotations.Param;
import tk.mybatis.mapper.entity.Condition;

import java.util.List;
import java.util.Map;

public interface ConditionScriptMapper extends MyMapper<ConditionScript> {
    List<ConditionScript> findtestconditionscriptWithName(final Map<String, Object> params);

    void updateTestconditionScript(ConditionScript params);

    int ifexist(Condition condition);
    List<ConditionScript> getconditionscriptbyid(@Param("conditionid") final Long conditionid);

}