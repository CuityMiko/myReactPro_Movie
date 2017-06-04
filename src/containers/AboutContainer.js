/**
 * 关于我们页面 实现个图片上传功能
 */
import React,{Component} from 'react'

import { Upload, Icon, Modal } from 'antd';

import Config from '../js/config.js'

import '../styles/app.css'

export default class AboutContainer extends Component{
    static defaultProps={
        uploadurl:Config.ServerHostURL+'/examples/uploadimage'
    }
    constructor(props){
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [] //{uid: -1,name: 'xxx.png',status: 'done',url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
        };
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        console.log(222222222222)
        console.log(file)
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => {
        console.log(fileList)
        this.setState({ fileList })
    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
        );
        return (
        <div className="clearfix apphight">
            <Upload
                showUploadList={true}
                 action={this.props.uploadurl}
                //action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}>
            {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
        );
    }
}