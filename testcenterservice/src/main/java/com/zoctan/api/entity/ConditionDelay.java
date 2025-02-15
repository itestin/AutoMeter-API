package com.zoctan.api.entity;

import java.util.Date;
import javax.persistence.*;

@Table(name = "condition_delay")
public class ConditionDelay {
    /**
     * Id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 父条件id
     */
    private Long conditionid;

    /**
     * 父条件名
     */
    private String conditionname;

    /**
     * 子条件名
     */
    private String subconditionname;

    /**
     * 延时时间
     */
    private Long delaytime;

    /**
     * 创建时间
     */
    @Column(name = "create_time")
    private Date createTime;

    /**
     * 上一次修改时间
     */
    @Column(name = "lastmodify_time")
    private Date lastmodifyTime;

    /**
     * 创建者
     */
    private String creator;

    /**
     * 获取Id
     *
     * @return id - Id
     */
    public Long getId() {
        return id;
    }

    /**
     * 设置Id
     *
     * @param id Id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * 获取父条件id
     *
     * @return conditionid - 父条件id
     */
    public Long getConditionid() {
        return conditionid;
    }

    /**
     * 设置父条件id
     *
     * @param conditionid 父条件id
     */
    public void setConditionid(Long conditionid) {
        this.conditionid = conditionid;
    }

    /**
     * 获取父条件名
     *
     * @return conditionname - 父条件名
     */
    public String getConditionname() {
        return conditionname;
    }

    /**
     * 设置父条件名
     *
     * @param conditionname 父条件名
     */
    public void setConditionname(String conditionname) {
        this.conditionname = conditionname;
    }

    /**
     * 获取子条件名
     *
     * @return subconditionname - 子条件名
     */
    public String getSubconditionname() {
        return subconditionname;
    }

    /**
     * 设置子条件名
     *
     * @param subconditionname 子条件名
     */
    public void setSubconditionname(String subconditionname) {
        this.subconditionname = subconditionname;
    }

    /**
     * 获取延时时间
     *
     * @return delaytime - 延时时间
     */
    public Long getDelaytime() {
        return delaytime;
    }

    /**
     * 设置延时时间
     *
     * @param delaytime 延时时间
     */
    public void setDelaytime(Long delaytime) {
        this.delaytime = delaytime;
    }

    /**
     * 获取创建时间
     *
     * @return create_time - 创建时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 设置创建时间
     *
     * @param createTime 创建时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 获取上一次修改时间
     *
     * @return lastmodify_time - 上一次修改时间
     */
    public Date getLastmodifyTime() {
        return lastmodifyTime;
    }

    /**
     * 设置上一次修改时间
     *
     * @param lastmodifyTime 上一次修改时间
     */
    public void setLastmodifyTime(Date lastmodifyTime) {
        this.lastmodifyTime = lastmodifyTime;
    }

    /**
     * 获取创建者
     *
     * @return creator - 创建者
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 设置创建者
     *
     * @param creator 创建者
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }
}