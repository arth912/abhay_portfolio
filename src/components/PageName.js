import React from 'react'

const PageName = (props) => {
    return (
        <div className='h-50'>
            <div className="et_pb_section et_pb_section_1 et_pb_fullwidth_section et_section_regular">
                <section
                    className="et_pb_module et_pb_fullwidth_header et_pb_fullwidth_header_0 et_pb_bg_layout_dark et_pb_text_align_center">
                    <div className="et_pb_fullwidth_header_container center">
                        <div className="header-content-container center">
                            <div className="header-content">
                                <h1 className="et_pb_module_header">{props.name}</h1>
                                <div className="et_pb_header_content_wrapper"></div>
                            </div>
                        </div>
                    </div>
                    <div className="et_pb_fullwidth_header_overlay"></div>
                    <div className="et_pb_fullwidth_header_scroll"></div>
                </section>
            </div>
        </div>
    )
}

export default PageName