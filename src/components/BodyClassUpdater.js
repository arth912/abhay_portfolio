import React, { useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

function BodyClassUpdater() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateBodyClass = () => {
      document.body.className = location.pathname === '/' ? 'home page-template-default page page-id-51 et_pb_button_helper_class et_transparent_nav et_fullwidth_nav et_fixed_nav et_show_nav et_cover_background et_pb_gutter et_pb_gutters3 et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_pb_footer_columns4 et_header_style_split et_pb_pagebuilder_layout et_right_sidebar et_divi_theme et-db' : 'page-template-default page page-id-946 page-child parent-pageid-814 et_pb_button_helper_class et_transparent_nav et_fullwidth_nav et_fixed_nav et_show_nav et_cover_background et_pb_gutter et_pb_gutters3 et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_pb_footer_columns4 et_header_style_split et_pb_pagebuilder_layout et_right_sidebar et_divi_theme et-db';
    };

    updateBodyClass();

    return navigate(updateBodyClass);
  }, [location, navigate]);

  return null;
}

export default BodyClassUpdater;

