(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6wrC":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Pagination/PaginationPage",function(){var e=a("qIvM");return{page:e.default||e}}])},akZe:function(e,n,a){"use strict";a.d(n,"a",function(){return o});var t=a("pneb"),r=a("ERkP"),i=a.n(r),s=a("R5dR"),g=a("nFRM"),m=[{name:"margin",types:i.a.createElement(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:i.a.createElement(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:i.a.createElement(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:i.a.createElement(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:i.a.createElement(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:i.a.createElement(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:i.a.createElement(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],o=function(e){return i.a.createElement(g.a,Object(t.a)({title:"Margin",propList:m},e))}},qIvM:function(e,n,a){"use strict";a.r(n);var t=a("+Ls6"),r=a("ERkP"),i=a.n(r),s=a("GsAr"),g=a("pneb"),m=a("nFRM"),o=[{name:"itemsPerPage",types:"number",required:!0,description:"Indicates how many items are displayed per page."},{name:"currentPage",types:"number",required:!0,description:"Indicates the page currently/initially displayed."},{name:"totalItems",types:"number",required:!0,description:"Indicates how many items in total will be displayed."},{name:"itemsPerPageOptions",types:"number[]",required:!0,description:"Indicates options for per-page ranges."},{name:"onPageChange",types:"(page: number) => void",required:!0,description:"Function that will be called when a navigation arrow is clicked."},{name:"onItemsPerPageChange",types:"(range: number) => void",required:!0,description:"Function that will be called when a new per-page range is selected."}],l=function(e){return i.a.createElement(m.a,Object(g.a)({title:"Pagination",propList:o},e))},c=a("akZe");n.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(t.H0,null,"Pagination"),i.a.createElement(t.Text,null,"Pagination allows for navigation through pages of content."," "),i.a.createElement(s.a,null,"function ExampleList() {\n  const [items] = React.useState(['Item1', 'Item2', 'Item3', 'Item 4', 'Item 5']);\n  const [ranges] = React.useState([2, 3, 4]);\n  const [range, setRange] = React.useState(ranges[0]);\n  const [page, setPage] = React.useState(1);\n  const [currentItems, setCurrentItems] = React.useState(['']);\n\n  const onItemsPerPageChange = newRange => {\n    setPage(1);\n    setRange(newRange);\n  };\n\n  React.useEffect(() => {\n    const maxItems = page * range;\n    const lastItem = Math.min(maxItems, items.length);\n    const firstItem = Math.max(0, maxItems - range);\n\n    setCurrentItems(items.slice(firstItem, lastItem));\n  }, [page, items, range]);\n\n  return (\n    <>\n      <Pagination\n        currentPage={page}\n        itemsPerPage={range}\n        itemsPerPageOptions={ranges}\n        totalItems={items.length}\n        onPageChange={newPage => setPage(newPage)}\n        onItemsPerPageChange={onItemsPerPageChange}\n      />\n      <ul>\n        {currentItems.map(item => (\n          <li key={item}>{item}</li>\n        ))}\n      </ul>\n    </>\n  );\n}"),i.a.createElement(t.H1,null,"API"),i.a.createElement(l,null),i.a.createElement(t.H2,null,"Inherited Props"),i.a.createElement(c.a,{collapsible:!0}))}}},[["6wrC",1,0]]]);