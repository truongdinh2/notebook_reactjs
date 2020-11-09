import './App.css';
import Search from './components/Search';
import Content from './components/Content';
import Summary from './components/summary';
import { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      searchVl: '',
      test: [],
      info4: [
        {txttitle: 'sóng',Author: 'xuân quỳnh',content: '-  Bài thơ Sóng Xuân Quỳnh được sáng tác năm 1967, lấy cảm hứng trong một chuyến đi thực tế tại bãi biển Diêm Điền – Thái Bình và in trong tập Hoa dọc chiến hào. - Đây là bài thơ tình yêu nổi tiếng nhất tiêu biểu cho phong cách thơ nữ tính, trữ tình của Xuân Quỳnh.',category: 'poem'}
      ,{
        txttitle:'vợ chồng a phủ', Author: 'Tô Hoài', category:'comic',content: 'Truyện được viết vào năm 1952 và là sản phẩm của chuyến thâm nhập thực tế, “cùng ăn, cùng ở, cùng gắn bó” với đồng bào các dân tộc miền núi Tây Bắc suốt 8 tháng của Tô Hoài trên núi cao đến các bản làng mới giải phóng.'
      }],
      isOnRender: false,
      isOnEdit: false,
  }
  }
  givedFile = (params) => {
    var {info4} = this.state;
    info4.push(params);
    this.setState({
      info4: info4,
    });
  }
  handleSearch = (params) => {
    this.setState({
      searchVl: params,
    })
  }
  onRender = () => {
    console.log(this.state.isOnRender)
    this.setState({
      isOnRender : true,
    })
  }
  onEdit = (pramas) => {
    this.setState({
      isOnEdit: pramas
    })
  }
  render() { 
    return (
      <div className = "container">
        <div className="tittle">
          <h2>NOTEBOOK</h2>
        </div>
        <div className="List">
          <Search searchVal = {this.handleSearch}/>
          <Form givedFile = {this.givedFile} test={this.state.test}
          onEdit = {this.state.isOnEdit} />
          <Summary info4 = {this.state.info4}
                   searchValue = {this.state.searchVl}
                   onRender = {this.onRender}
                   onEdit = {this.onEdit}/>
        </div>
        <div className="content">
          <Content  
                    info4 = {this.state.info4}
                    onRender = {this.state.isOnRender}
                     />
        </div>
      </div>
      );
  }
}
 const source = {
   work:'vợ chồng a phủ', Author: 'Tô Hoài', category:'comic',content: 'Truyện được viết vào năm 1952 và là sản phẩm của chuyến thâm nhập thực tế, “cùng ăn, cùng ở, cùng gắn bó” với đồng bào các dân tộc miền núi Tây Bắc suốt 8 tháng của Tô Hoài trên núi cao đến các bản làng mới giải phóng.'
 }
export default App ;
