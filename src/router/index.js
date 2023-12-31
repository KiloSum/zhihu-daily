import React, { Suspense } from "react";
import{Routes,Route, useNavigate, useLocation, useParams, useSearchParams} from 'react-router-dom';
import routes from "./routes";
import {Mask,DotLoading} from 'antd-mobile';

// 统一路由配置
const Element = function Element(props){
  let {component:Component,meta}=props;
  // 修改页面title
  let{title="知乎日报-WebApp"}=meta||{};
  document.title=title;
  // 获取路由信息，基于属性传递给组件
  const navigate = useNavigate(),
  location = useLocation(),
  params = useParams(),
  [usp] = useSearchParams();
  return <Component navigate ={navigate}
  location = {location}
  params={params}
  usp={usp}/>
};
export default function RouterView(){
  return <Suspense fallback={<Mask visible={true} opacity="thick">
    <DotLoading color="white"></DotLoading>
  </Mask>}>
    <Routes>
      {routes.map((item,index)=>{
        return <Route key={item.name} path={item.path} element={
          <Element{...item}></Element>
        }></Route>
      })}
    </Routes>
  </Suspense>
};