
import React from 'react';


const DynamicIndex = React.lazy(() => import('./pages\application\Chart\index'));
const DynamicArea = React.lazy(() => import('./pages\application\Chart\Area'));
const DynamicData = React.lazy(() => import('./pages\application\Chart\data'));
const DynamicPie = React.lazy(() => import('./pages\application\Chart\Pie'));
const DynamicStackColumn = React.lazy(() => import('./pages\application\Chart\StackColumn'));
const DynamicIndex = React.lazy(() => import('./pages\application\Kanban\index'));
const DynamicBoardColumn = React.lazy(() => import('./pages\application\Kanban\board\BoardColumn'));
const DynamicCard = React.lazy(() => import('./pages\application\Kanban\board\Card'));
const DynamicEmptyColumn = React.lazy(() => import('./pages\application\Kanban\board\EmptyColumn'));
const DynamicAddBoardColumn = React.lazy(() => import('./pages\application\Kanban\modal\AddBoardColumn'));
const DynamicAddTask = React.lazy(() => import('./pages\application\Kanban\modal\AddTask'));
const DynamicSignin = React.lazy(() => import('./pages\authentication\Signin'));
const DynamicSignup = React.lazy(() => import('./pages\authentication\Signup'));
const DynamicIndex = React.lazy(() => import('./pages\dashboard\CarInterface\index'));
const DynamicIndex = React.lazy(() => import('./pages\dashboard\CarInterface\CenterInterface\index'));
const DynamicIndex = React.lazy(() => import('./pages\dashboard\CarInterface\RightInterface\index'));
const DynamicFirst = React.lazy(() => import('./pages\dashboard\CarInterface\RightInterface\First'));
const DynamicSecond = React.lazy(() => import('./pages\dashboard\CarInterface\RightInterface\Second'));
const DynamicThird = React.lazy(() => import('./pages\dashboard\CarInterface\RightInterface\Third'));
const DynamicIndex = React.lazy(() => import('./pages\dashboard\MainDashboard\index'));
const DynamicIndex = React.lazy(() => import('./pages\dashboard\MainDashboard\CenterDashboard\index'));
const DynamicData = React.lazy(() => import('./pages\dashboard\MainDashboard\CenterDashboard\data'));
const DynamicFirst = React.lazy(() => import('./pages\dashboard\MainDashboard\CenterDashboard\First'));
const DynamicFourth = React.lazy(() => import('./pages\dashboard\MainDashboard\CenterDashboard\Fourth'));
const DynamicInfo = React.lazy(() => import('./pages\dashboard\MainDashboard\CenterDashboard\Info'));
const DynamicSecond = React.lazy(() => import('./pages\dashboard\MainDashboard\CenterDashboard\Second'));
const DynamicThird = React.lazy(() => import('./pages\dashboard\MainDashboard\CenterDashboard\Third'));
const DynamicChartData = React.lazy(() => import('./pages\dashboard\MainDashboard\chartData'));
const DynamicIndex = React.lazy(() => import('./pages\dashboard\MainDashboard\RightDashboard\index'));
const DynamicIndex = React.lazy(() => import('./pages\dashboard\SmartHome\index'));
const DynamicIndex = React.lazy(() => import('./pages\dashboard\SmartHome\CenterHome\index'));
const DynamicFirst = React.lazy(() => import('./pages\dashboard\SmartHome\CenterHome\First'));
const DynamicSecond = React.lazy(() => import('./pages\dashboard\SmartHome\CenterHome\Second'));
const DynamicData = React.lazy(() => import('./pages\dashboard\SmartHome\data'));
const DynamicIndex = React.lazy(() => import('./pages\dashboard\SmartHome\RightHome\index'));
const DynamicIndex = React.lazy(() => import('./pages\nft\MarketPlace\index'));
const DynamicIndex = React.lazy(() => import('./pages\nft\MarketPlace\CenterPlace\index'));
const DynamicCard = React.lazy(() => import('./pages\nft\MarketPlace\CenterPlace\Card'));
const DynamicFirst = React.lazy(() => import('./pages\nft\MarketPlace\CenterPlace\First'));
const DynamicSecond = React.lazy(() => import('./pages\nft\MarketPlace\CenterPlace\Second'));
const DynamicData = React.lazy(() => import('./pages\nft\MarketPlace\data'));
const DynamicIndex = React.lazy(() => import('./pages\nft\MarketPlace\RightPlace\index'));
const DynamicCreator = React.lazy(() => import('./pages\nft\MarketPlace\RightPlace\Creator'));
const DynamicIndex = React.lazy(() => import('./pages\nft\NftPage\index'));
const DynamicIndex = React.lazy(() => import('./pages\nft\NftPage\CenterNft\index'));
const DynamicData = React.lazy(() => import('./pages\nft\NftPage\data'));
const DynamicIndex = React.lazy(() => import('./pages\nft\NftPage\RightNft\index'));


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: 'C:\application\Chart', element: <DynamicIndex />, index: true},
      { path: 'C:\application\Chart\Area', element: <DynamicArea />, },
      { path: 'C:\application\Chart\data', element: <DynamicData />, },
      { path: 'C:\application\Chart\Pie', element: <DynamicPie />, },
      { path: 'C:\application\Chart\StackColumn', element: <DynamicStackColumn />, },
      { path: 'C:\application\Kanban', element: <DynamicIndex />, index: true},
      { path: 'C:\application\Kanban\board\BoardColumn', element: <DynamicBoardColumn />, },
      { path: 'C:\application\Kanban\board\Card', element: <DynamicCard />, },
      { path: 'C:\application\Kanban\board\EmptyColumn', element: <DynamicEmptyColumn />, },
      { path: 'C:\application\Kanban\modal\AddBoardColumn', element: <DynamicAddBoardColumn />, },
      { path: 'C:\application\Kanban\modal\AddTask', element: <DynamicAddTask />, },
      { path: 'C:\authentication\Signin', element: <DynamicSignin />, },
      { path: 'C:\authentication\Signup', element: <DynamicSignup />, },
      { path: 'C:\dashboard\CarInterface', element: <DynamicIndex />, index: true},
      { path: 'C:\dashboard\CarInterface\CenterInterface', element: <DynamicIndex />, index: true},
      { path: 'C:\dashboard\CarInterface\RightInterface', element: <DynamicIndex />, index: true},
      { path: 'C:\dashboard\CarInterface\RightInterface\First', element: <DynamicFirst />, },
      { path: 'C:\dashboard\CarInterface\RightInterface\Second', element: <DynamicSecond />, },
      { path: 'C:\dashboard\CarInterface\RightInterface\Third', element: <DynamicThird />, },
      { path: 'C:\dashboard\MainDashboard', element: <DynamicIndex />, index: true},
      { path: 'C:\dashboard\MainDashboard\CenterDashboard', element: <DynamicIndex />, index: true},
      { path: 'C:\dashboard\MainDashboard\CenterDashboard\data', element: <DynamicData />, },
      { path: 'C:\dashboard\MainDashboard\CenterDashboard\First', element: <DynamicFirst />, },
      { path: 'C:\dashboard\MainDashboard\CenterDashboard\Fourth', element: <DynamicFourth />, },
      { path: 'C:\dashboard\MainDashboard\CenterDashboard\Info', element: <DynamicInfo />, },
      { path: 'C:\dashboard\MainDashboard\CenterDashboard\Second', element: <DynamicSecond />, },
      { path: 'C:\dashboard\MainDashboard\CenterDashboard\Third', element: <DynamicThird />, },
      { path: 'C:\dashboard\MainDashboard\chartData', element: <DynamicChartData />, },
      { path: 'C:\dashboard\MainDashboard\RightDashboard', element: <DynamicIndex />, index: true},
      { path: 'C:\dashboard\SmartHome', element: <DynamicIndex />, index: true},
      { path: 'C:\dashboard\SmartHome\CenterHome', element: <DynamicIndex />, index: true},
      { path: 'C:\dashboard\SmartHome\CenterHome\First', element: <DynamicFirst />, },
      { path: 'C:\dashboard\SmartHome\CenterHome\Second', element: <DynamicSecond />, },
      { path: 'C:\dashboard\SmartHome\data', element: <DynamicData />, },
      { path: 'C:\dashboard\SmartHome\RightHome', element: <DynamicIndex />, index: true},
      { path: 'C:\nft\MarketPlace', element: <DynamicIndex />, index: true},
      { path: 'C:\nft\MarketPlace\CenterPlace', element: <DynamicIndex />, index: true},
      { path: 'C:\nft\MarketPlace\CenterPlace\Card', element: <DynamicCard />, },
      { path: 'C:\nft\MarketPlace\CenterPlace\First', element: <DynamicFirst />, },
      { path: 'C:\nft\MarketPlace\CenterPlace\Second', element: <DynamicSecond />, },
      { path: 'C:\nft\MarketPlace\data', element: <DynamicData />, },
      { path: 'C:\nft\MarketPlace\RightPlace', element: <DynamicIndex />, index: true},
      { path: 'C:\nft\MarketPlace\RightPlace\Creator', element: <DynamicCreator />, },
      { path: 'C:\nft\NftPage', element: <DynamicIndex />, index: true},
      { path: 'C:\nft\NftPage\CenterNft', element: <DynamicIndex />, index: true},
      { path: 'C:\nft\NftPage\data', element: <DynamicData />, },
      { path: 'C:\nft\NftPage\RightNft', element: <DynamicIndex />, index: true},
    ]
  }
]

export const pages = [
  { route: 'C:\application\Chart' },
  { route: 'C:\application\Chart\Area' },
  { route: 'C:\application\Chart\data' },
  { route: 'C:\application\Chart\Pie' },
  { route: 'C:\application\Chart\StackColumn' },
  { route: 'C:\application\Kanban' },
  { route: 'C:\application\Kanban\board\BoardColumn' },
  { route: 'C:\application\Kanban\board\Card' },
  { route: 'C:\application\Kanban\board\EmptyColumn' },
  { route: 'C:\application\Kanban\modal\AddBoardColumn' },
  { route: 'C:\application\Kanban\modal\AddTask' },
  { route: 'C:\authentication\Signin' },
  { route: 'C:\authentication\Signup' },
  { route: 'C:\dashboard\CarInterface' },
  { route: 'C:\dashboard\CarInterface\CenterInterface' },
  { route: 'C:\dashboard\CarInterface\RightInterface' },
  { route: 'C:\dashboard\CarInterface\RightInterface\First' },
  { route: 'C:\dashboard\CarInterface\RightInterface\Second' },
  { route: 'C:\dashboard\CarInterface\RightInterface\Third' },
  { route: 'C:\dashboard\MainDashboard' },
  { route: 'C:\dashboard\MainDashboard\CenterDashboard' },
  { route: 'C:\dashboard\MainDashboard\CenterDashboard\data' },
  { route: 'C:\dashboard\MainDashboard\CenterDashboard\First' },
  { route: 'C:\dashboard\MainDashboard\CenterDashboard\Fourth' },
  { route: 'C:\dashboard\MainDashboard\CenterDashboard\Info' },
  { route: 'C:\dashboard\MainDashboard\CenterDashboard\Second' },
  { route: 'C:\dashboard\MainDashboard\CenterDashboard\Third' },
  { route: 'C:\dashboard\MainDashboard\chartData' },
  { route: 'C:\dashboard\MainDashboard\RightDashboard' },
  { route: 'C:\dashboard\SmartHome' },
  { route: 'C:\dashboard\SmartHome\CenterHome' },
  { route: 'C:\dashboard\SmartHome\CenterHome\First' },
  { route: 'C:\dashboard\SmartHome\CenterHome\Second' },
  { route: 'C:\dashboard\SmartHome\data' },
  { route: 'C:\dashboard\SmartHome\RightHome' },
  { route: 'C:\nft\MarketPlace' },
  { route: 'C:\nft\MarketPlace\CenterPlace' },
  { route: 'C:\nft\MarketPlace\CenterPlace\Card' },
  { route: 'C:\nft\MarketPlace\CenterPlace\First' },
  { route: 'C:\nft\MarketPlace\CenterPlace\Second' },
  { route: 'C:\nft\MarketPlace\data' },
  { route: 'C:\nft\MarketPlace\RightPlace' },
  { route: 'C:\nft\MarketPlace\RightPlace\Creator' },
  { route: 'C:\nft\NftPage' },
  { route: 'C:\nft\NftPage\CenterNft' },
  { route: 'C:\nft\NftPage\data' },
  { route: 'C:\nft\NftPage\RightNft' },
]
