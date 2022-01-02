package com.zoctan.api.core.service;

/**
 * Created by fanseasn on 2020/10/17.
 */
/*
 @author Season
 @DESCRIPTION 
 @create 2020/10/17
*/

import com.zoctan.api.dto.RequestObject;
import com.zoctan.api.dto.TestResponeData;
import com.zoctan.api.entity.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 请求头
 */
public class TestCaseHelp {
    // 拼装请求需要的用例数据
    public RequestObject GetCaseRequestData(List<ApiCasedata> apiCasedataList, Api api, Apicases apicases, Deployunit deployunit, Macdepunit macdepunit, Machine machine) {
        RequestObject ro=new RequestObject();
        // url请求资源路径
        String path = api.getPath();
        if (!path.startsWith("/")) {
            path = "/" + path;
        }
        String casetype=apicases.getCasetype();
        String expect=apicases.getExpect();

        //获取请求响应的数据格式
        String requestcontenttype =api.getRequestcontenttype();
        String responecontenttype =api.getResponecontenttype();
        // http请求方式 get，post
        String method = api.getVisittype();
        // api风格
        String apistyle =api.getApistyle();
        // 协议 http,https,rpc
        String protocal = deployunit.getProtocal().toLowerCase();
        // 发布单元端口
        String port = deployunit.getPort();
        // 获取发布单元访问方式，ip或者域名
        String deployunitvisittype =macdepunit.getVisittype();
        // 根据访问方式来确定ip还是域名
        String testserver = "";
        String resource = "";
        if(deployunitvisittype.equals(new String("ip")))
        {
            testserver =machine.getIp();
            resource = protocal + "://" + testserver + ":" + port + path;
        }
        else
        {
            testserver= macdepunit.getDomain();
            resource = protocal + "://" + testserver  + path;
        }
        HashMap<String, String> headmap=fixhttprequestdatas("Header",apiCasedataList);
        HashMap<String, String> bodymap=fixhttprequestdatas("Body",apiCasedataList);
        HashMap<String, String> paramsmap=fixhttprequestdatas("Params",apiCasedataList);
        // 设置header
        HttpHeader header = new HttpHeader();
        for (String key : headmap.keySet()) {
            header.addParam(key, headmap.get(key));
        }
        // 设置参数
        String PostData = "";
        HttpParamers paramers = new  HttpParamers();
        for (String key : paramsmap.keySet()) {
            paramers.addParam(key, paramsmap.get(key));
        }
        try {
            PostData=GetParasPostData(requestcontenttype,paramers);
        } catch (IOException e) {
            e.printStackTrace();
        }
        // 如果参数为空，设置body
        for (String key : bodymap.keySet()) {
            //paramers.addParam(key, bodymap.get(key));
            PostData = bodymap.get(key);
        }
        ro.setPostData(PostData);
        ro.setExpect(expect);
        ro.setCasetype(casetype);
        ro.setHeader(header);
        ro.setProtocal(protocal);
        ro.setApistyle(apistyle);
        ro.setParamers(paramers);
        ro.setRequestcontenttype(requestcontenttype);
        ro.setRequestmMthod(method);
        ro.setResource(resource);
        ro.setResponecontenttype(responecontenttype);
        return ro;
    }

    // 获取用例Header，params，Body，Dubbo数据
    public HashMap<String, String> fixhttprequestdatas(String MapType,List<ApiCasedata> casedatalist) {
        HashMap<String, String> DataMap=new HashMap<>();
        for (ApiCasedata data : casedatalist) {
            String propertytype= data.getPropertytype();
            if (propertytype.equals(MapType)) {
                DataMap.put(data.getApiparam().trim(), data.getApiparamvalue().trim());
            }
        }
        return DataMap;
    }

    private String GetParasPostData(String RequestContentType, HttpParamers paramers) throws IOException {
        String Result = "";
        if (RequestContentType.equals("json")) {
            paramers.setJsonParamer();
            Result = paramers.getJsonParamer();
        }
        if (RequestContentType.equals("form表单")) {
            Result = paramers.getQueryString("UTF-8");
        }
        if (RequestContentType.equals("xml")) {

        } else {

        }
        return Result;
    }

    // 发送http请求
    public TestResponeData request(RequestObject requestObject) throws Exception {
        TestResponeData result=new TestResponeData();
        if (requestObject.getProtocal().equals("http")||requestObject.getProtocal().equals("https")) {
            result = Httphelp.doService(requestObject.getProtocal(),requestObject.getResource(), requestObject.getRequestmMthod(),requestObject.getApistyle(), requestObject.getParamers(),requestObject.getPostData(),requestObject.getRequestcontenttype(), requestObject.getHeader(), 30000, 30000);
        }
        return result;
    }
}