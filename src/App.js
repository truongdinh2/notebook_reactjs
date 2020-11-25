import './App.css';
import Search from './components/Search';
import Content from './components/Content';
import Summary from './components/summary';
import { Component } from 'react';
import Form from './components/Form';
import { Button, Grid } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      searchVl: '',
      test: [],
      info4: [
        {txttitle: 'sóng',Author: 'xuân quỳnh',date:'2020-10-20',content: '-  Bài thơ Sóng Xuân Quỳnh được sáng tác năm 1967, lấy cảm hứng trong một chuyến đi thực tế tại bãi biển Diêm Điền – Thái Bình và in trong tập Hoa dọc chiến hào. - Đây là bài thơ tình yêu nổi tiếng nhất tiêu biểu cho phong cách thơ nữ tính, trữ tình của Xuân Quỳnh.',category: 'poem'}
      ,{
        txttitle:'vợ chồng a phủ', Author: 'Tô Hoài', date:'2020-11-25',category:'comic book',content: 'Truyện được viết vào năm 1952 và là sản phẩm của chuyến thâm nhập thực tế, “cùng ăn, cùng ở, cùng gắn bó” với đồng bào các dân tộc miền núi Tây Bắc suốt 8 tháng của Tô Hoài trên núi cao đến các bản làng mới giải phóng.'
      }],
      isOnRender: false,
      // isOnEdit: false,
      isNewfile: false,
      isOpenDialog: false,
      rowSelected:null,
      index:null,
      rowKey:null,
  }
  }
  givedFile = (params) => {
    var {info4,index,} = this.state;
    this.setState({
        info4: info4,
      });
    if(!index){
      info4.push(params);
      
    } else{
      console.log(info4[index]);
      info4[index] = params;
    }
    console.log(params)
  }
  handleSearch = (params) => {
    this.setState({
      searchVl: params,
    })
  }
  onShowInfo = (key) => {
    // console.log(key)
    this.setState({
      rowKey : key,
    })
  }
  handleEdit = (params) =>{
    this.setState({
      rowSelected:this.state.info4[params],
      isNewfile: false,
      isOpenDialog:true,
      index: params,
    }, function(){
    // console.log(this.state.isNewfile)
    // console.log(params)
    })

  }
  openDialog = () => {
    this.setState({
      isOpenDialog:true,
      isNewfile:true
    }, function(){
      console.log(this.state.isOpenDialog)
    })
  }
  closeDialog = () => {
    this.setState({
      isOpenDialog:false
    })
  }
  render() { 
    var {isOpenDialog, rowSelected} = this.state;
    console.log(isOpenDialog)
    return (
      <Grid container spacing={4}>
        <div className={isOpenDialog ? 'modal': ''}>
        </div>
        <Grid item md={12}>
          <div className="tittle">
            <h2>NOTEBOOK</h2>
          </div>
        </Grid>
        <Grid item md={1}/>
        <Grid item md={4}>
          <Search searchVal = {this.handleSearch}/> 
          <Button variant="contained" onClick = {this.openDialog} color="secondary" 
            className="btnAdd">
            Addfiles
          </Button> 
            {
              isOpenDialog && <Form givedFile = {this.givedFile} 
              test={this.state.test}
              handleEdit = {this.state.index} 
              closeDialog={this.closeDialog}
              rowSelected={rowSelected}
              isNewfile={this.state.isNewfile}
              />
            }
            <Summary info4 = {this.state.info4}
              searchValue = {this.state.searchVl}
              onShowInfo = {this.onShowInfo}
              handleEdit = {this.handleEdit}
            />
        </Grid>
        <Grid item md={7}>
          <Content  
            info4 = {this.state.info4}
            rowKey = {this.state.rowKey}
              />
        </Grid>
      </Grid>
      );
  }
}
export default App ;
