import { List } from "react-virtualized";

const VirtualScrollExample = () => {
  // 生成10000个span元素的数据
  const data = Array(10000)
    .fill()
    .map((_, index) => `Item ${index}`);

  // 渲染每个列表项
  const rowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <span>{data[index]}</span>
    </div>
  );

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <List
        width={500} // 列表的宽度
        height={400} // 列表的可见高度
        rowHeight={30} // 每个列表项的高度
        rowCount={data.length} // 列表项的总数
        rowRenderer={rowRenderer} // 渲染列表项的函数
      />
    </div>
  );
};

export default VirtualScrollExample;
