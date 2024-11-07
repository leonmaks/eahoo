-- F$RI_ROOTS
--
drop function if exists f$ri_roots;

create or replace function f$ri_roots(
  domain_ids text[]
)
returns table (ri_id text)
as $$

select rv_0.ri_id
  from meta_items mi_d
  join mi_links ml_r on ml_r.mi_id1 = mi_d.id
  join ri_vers rv_0 on rv_0.mi_id = ml_r.mi_id2
 where ml_r.mi_link_type_id = '10'
   and mi_d.id = any(domain_ids)

$$
language sql
;

select ri_id from f$ri_roots(array['01.02']);



-- F$RI_HIERARCHY
--
drop function if exists f$ri_hierarchy;

create or replace function f$ri_hierarchy(
  root_ids text[]
)
returns table (id text, ri_id text, mi_id text, name text, description text, fd date, td date, hierarchy__lvl integer)
as $$

with recursive roh as (
select rv_r.id, rv_r.ri_id, rv_r.mi_id, rv_r.name, rv_r.description, rv_r.fd, rv_r.td, 0 as hierarchy__lvl
  from ri_vers rv_r
 where rv_r.ri_id = any(root_ids)
union
select rv_chld.id, rv_chld.ri_id, rv_chld.mi_id, rv_chld.name, rv_chld.description, rv_chld.fd, rv_chld.td, roh.hierarchy__lvl+1
from ri_links as rl_chld
join roh on roh.ri_id = rl_chld.ri_id1
join ri_vers rv_chld on rv_chld.ri_id = rl_chld.ri_id2
)
select * from roh

$$
language sql
;

select * from f$ri_hierarchy(array['cm2jl8cwh0008kffyhnn37l2a', 'cm2jl8cx0001bkffyu3i9mykw', 'cm2jl8cx8001tkffyrhfiuusv']);


select ml.mi_id2 
  from mi_links ml
  join mi_link_types mlt on mlt.id = ml.mi_link_type_id
 where mlt.id = '01'
   and ml.mi_id1 = '03.03'
;


--
-- EOF
--

with recursive roh as (
select rv_0.ri_id as ri_id, 0 as hierarchy__lvl
  from meta_items mi_d
  
  from mi_links ml_r
  join ri_vers rv_0 on rv_0.mi_id = ml_r.mi_id2
 where mi_d.id = '01.02' -- Application
   and ml_r.mi_link_type_id = '10'
union
select rl_chld.ri_id2, roh.hierarchy__lvl+1
from ri_links as rl_chld
join roh on roh.ri_id = rl_chld.ri_id1
)
select *
  from roh








select rv_0.ri_id
  from meta_items mi_d
  join mi_links ml_r on ml_r.mi_id1 = mi_d.id
  join ri_vers rv_0 on rv_0.mi_id = ml_r.mi_id2
 where ml_r.mi_link_type_id = '10'
   and mi_d.id = any(domain_ids)





;



drop function if exists f$repo_obj_hierarchy(text[], integer);

with recursive roh as (
select rv_0.ri_id as ri_id, 0 as hierarchy__lvl
  from meta_items mi_d
  join mi_links ml_r on ml_r.mi_id1 = mi_d.id
  join ri_vers rv_0 on rv_0.mi_id = ml_r.mi_id2
 where mi_d.id = '01.02' -- Application
   and ml_r.mi_link_type_id = '10'
union
select rl_chld.ri_id2, roh.hierarchy__lvl+1
from ri_links as rl_chld
join roh on roh.ri_id = rl_chld.ri_id1
)
select *
  from roh
  join ri_vers rv on rv.ri_id = roh.ri_id
;

select * from repo_items ri where id in (


create or replace function f$repo_obj_hierarchy(
root_ids text[], 
max_lvl integer
)
returns table (obj__id text, obj__name text, obj__type_id integer, obj__lvl integer,
obj__sm_ci_code text, obj__sm_type text, obj__sm_subtype text, obj__sm_hpc_status text, obj__sm_environment text, obj__sm_name text, obj__sm_name2 text, obj__sm_j_cpu_proc_count text, obj__sm_j_cpu_count text, obj__sm_j_ram text, obj__sm_j_hdd text, obj__sm_j_sdd text, obj__sm_tps_placement text, obj__sm_id_address_list text,
obj__ear_aris_code text, obj__ear_centralization_level text, obj__ear_cii_category text, obj__ear_cloud_ready text, obj__ear_code text, obj__ear_criticality text, obj__ear_date_last_change text, obj__ear_full_name text, obj__ear_guid text, obj__ear_id_app text, obj__ear_nickname text, obj__ear_platform_ready text, obj__ear_received_data_conf_level text, obj__ear_received_data_integrity_level text, obj__ear_short_desc text, obj__ear_status text, obj__ear_status_c3 text, obj__ear_system_type text, obj__ear_target_readiness text, obj__ear_target_status text, obj__ear_type text, obj__ear_released_in_production_operation_date text, obj__ear_functionality text, obj__ear_app_tier_code text, obj__ear_app_tier_label text, obj__ear_author_last_change text, obj__ear_destination_code text, obj__ear_destination_label text, obj__ear_is_container bool, obj__ear_language_code text, obj__ear_language_label text, obj__ear_network text, obj__ear_network_segment text, obj__ear_network_zone text, obj__ear_technology_code text, obj__ear_technology_group_code text, obj__ear_technology_group_label text, obj__ear_technology_label text, obj__ear_technology_type_code text, obj__ear_technology_type_label text, obj__ear_type_last_change text, obj__ear_name text, obj__ear_api_id text, obj__ear_api_method_id text, obj__ear_api_method_name text, obj__ear_api_method_version text, obj__ear_api_name text, obj__ear_api_type text, obj__ear_api_version_id text, obj__ear_is_complex bool, obj__ear_is_custom bool, obj__ear_is_local bool, obj__ear_it_service bool, obj__ear_integration bool, obj__ear_is_out bool, obj__ear_comment text, obj__ear_din_infra text, obj__ear_id_din_infra text, obj__ear_namespace text, obj__ear_object_id integer, obj__ear_object_type text, obj__ear_polygon_code text, obj__ear_polygon_label text, obj__ear_polygon_type text, obj__ear_stand_owner text, obj__ear_url_openshift text, obj__ear_category_sm text, obj__ear_name_ir_sm text, obj__ear_tech_resource_species text, obj__ear_type_ir_sm text, obj__ear_hdd text, obj__ear_operating_system text, obj__ear_ram text, obj__ear_server_category_sm text, obj__ear_server_name_sm text, obj__ear_server_type_sm text, obj__ear_released_in_pilot_operation_date text, obj__ear_short_name text, obj__ear_released_in_archive_operation_date text, obj__ear_data_access_technology_code text, obj__ear_data_access_technology text,
obj__current_version text,
link__id text, link__obj1_id text, link__obj2_id text, link__type_id integer, link__direction repo_obj_link_directions,
hierarchy__lvl integer
)
as $$
with recursive roh as (
select r.id as obj__id, r.name as obj__name, r.type_id as obj__type_id, r.lvl as obj__lvl,
r.sm_ci_code as obj__sm_ci_code, r.sm_type as obj__sm_type, r.sm_subtype as obj__sm_subtype, r.sm_hpc_status as obj__sm_hpc_status, r.sm_environment as obj__sm_environment, r.sm_name as obj__sm_name, r.sm_name2 as obj__sm_name2, r.sm_j_cpu_proc_count as obj__sm_j_cpu_proc_count, r.sm_j_cpu_count as obj__sm_j_cpu_count, r.sm_j_ram as obj__sm_j_ram, r.sm_j_hdd as obj__sm_j_hdd, r.sm_j_sdd as obj__sm_j_sdd, r.sm_tps_placement as obj__sm_tps_placement, r.sm_id_address_list as obj__sm_id_address_list,
r.ear_aris_code as obj__ear_aris_code, r.ear_centralization_level as obj__ear_centralization_level, r.ear_cii_category as obj__ear_cii_category, r.ear_cloud_ready as obj__ear_cloud_ready, r.ear_code as obj__ear_code, r.ear_criticality as obj__ear_criticality, r.ear_date_last_change as obj__ear_date_last_change, r.ear_full_name as obj__ear_full_name, r.ear_guid as obj__ear_guid, r.ear_id_app as obj__ear_id_app, r.ear_nickname as obj__ear_nickname, r.ear_platform_ready as obj__ear_platform_ready, r.ear_received_data_conf_level as obj__ear_received_data_conf_level, r.ear_received_data_integrity_level as obj__ear_received_data_integrity_level, r.ear_short_desc as obj__ear_short_desc, r.ear_status as obj__ear_status, r.ear_status_c3 as obj__ear_status_c3, r.ear_system_type as obj__ear_system_type, r.ear_target_readiness as obj__ear_target_readiness, r.ear_target_status as obj__ear_target_status, r.ear_type as obj__ear_type, r.ear_released_in_production_operation_date as obj__ear_released_in_production_operation_date, r.ear_functionality as obj__ear_functionality, r.ear_app_tier_code as obj__ear_app_tier_code, r.ear_app_tier_label as obj__ear_app_tier_label, r.ear_author_last_change as obj__ear_author_last_change, r.ear_destination_code as obj__ear_destination_code, r.ear_destination_label as obj__ear_destination_label, r.ear_is_container as obj__ear_is_container, r.ear_language_code as obj__ear_language_code, r.ear_language_label as obj__ear_language_label, r.ear_network as obj__ear_network, r.ear_network_segment as obj__ear_network_segment, r.ear_network_zone as obj__ear_network_zone, r.ear_technology_code as obj__ear_technology_code, r.ear_technology_group_code as obj__ear_technology_group_code, r.ear_technology_group_label as obj__ear_technology_group_label, r.ear_technology_label as obj__ear_technology_label, r.ear_technology_type_code as obj__ear_technology_type_code, r.ear_technology_type_label as obj__ear_technology_type_label, r.ear_type_last_change as obj__ear_type_last_change, r.ear_name as obj__ear_name, r.ear_api_id as obj__ear_api_id, r.ear_api_method_id as obj__ear_api_method_id, r.ear_api_method_name as obj__ear_api_method_name, r.ear_api_method_version as obj__ear_api_method_version, r.ear_api_name as obj__ear_api_name, r.ear_api_type as obj__ear_api_type, r.ear_api_version_id as obj__ear_api_version_id, r.ear_is_complex as obj__ear_is_complex, r.ear_is_custom as obj__ear_is_custom, r.ear_is_local as obj__ear_is_local, r.ear_it_service as obj__ear_it_service, r.ear_integration as obj__ear_integration, r.ear_is_out as obj__ear_is_out, r.ear_comment as obj__ear_comment, r.ear_din_infra as obj__ear_din_infra, r.ear_id_din_infra as obj__ear_id_din_infra, r.ear_namespace as obj__ear_namespace, r.ear_object_id as obj__ear_object_id, r.ear_object_type as obj__ear_object_type, r.ear_polygon_code as obj__ear_polygon_code, r.ear_polygon_label as obj__ear_polygon_label, r.ear_polygon_type as obj__ear_polygon_type, r.ear_stand_owner as obj__ear_stand_owner, r.ear_url_openshift as obj__ear_url_openshift, r.ear_category_sm as obj__ear_category_sm, r.ear_name_ir_sm as obj__ear_name_ir_sm, r.ear_tech_resource_species as obj__ear_tech_resource_species, r.ear_type_ir_sm as obj__ear_type_ir_sm, r.ear_hdd as obj__ear_hdd, r.ear_operating_system as obj__ear_operating_system, r.ear_ram as obj__ear_ram, r.ear_server_category_sm as obj__ear_server_category_sm, r.ear_server_name_sm as obj__ear_server_name_sm, r.ear_server_type_sm as obj__ear_server_type_sm, r.ear_released_in_pilot_operation_date as obj__ear_released_in_pilot_operation_date, r.ear_short_name as obj__ear_short_name, r.ear_released_in_archive_operation_date as obj__ear_released_in_archive_operation_date, r.ear_data_access_technology_code as obj__ear_data_access_technology_code, r.ear_data_access_technology as obj__ear_data_access_technology,
r.current_version as obj__current_version,
null as link__id, null as link__obj1_id, null as link__obj2_id, null::integer as link__type_id,  null::repo_obj_link_directions as link__direction,
0 hierarchy__lvl
from repo_objs r
where r.id = any(root_ids)
--TODO: remove next line in production:
--and coalesce(r.ear_status, '') not in ('DECOMMISSIONED', 'Выведен')
and 0 <= coalesce(max_lvl, 0)
--where r.id = '71b33df7-3af5-4993-ad78-0c944bc19eb0' and 0 <= coalesce(3, 0)
union
select chld.id, chld.name, chld.type_id, chld.lvl,
chld.sm_ci_code, chld.sm_type, chld.sm_subtype, chld.sm_hpc_status, chld.sm_environment, chld.sm_name, chld.sm_name2, chld.sm_j_cpu_proc_count, chld.sm_j_cpu_count, chld.sm_j_ram, chld.sm_j_hdd, chld.sm_j_sdd, chld.sm_tps_placement, chld.sm_id_address_list,
chld.ear_aris_code, chld.ear_centralization_level, chld.ear_cii_category, chld.ear_cloud_ready, chld.ear_code, chld.ear_criticality, chld.ear_date_last_change, chld.ear_full_name, chld.ear_guid, chld.ear_id_app, chld.ear_nickname, chld.ear_platform_ready, chld.ear_received_data_conf_level, chld.ear_received_data_integrity_level, chld.ear_short_desc, chld.ear_status, chld.ear_status_c3, chld.ear_system_type, chld.ear_target_readiness, chld.ear_target_status, chld.ear_type, chld.ear_released_in_production_operation_date, chld.ear_functionality, chld.ear_app_tier_code, chld.ear_app_tier_label, chld.ear_author_last_change, chld.ear_destination_code, chld.ear_destination_label, chld.ear_is_container, chld.ear_language_code, chld.ear_language_label, chld.ear_network, chld.ear_network_segment, chld.ear_network_zone, chld.ear_technology_code, chld.ear_technology_group_code, chld.ear_technology_group_label, chld.ear_technology_label, chld.ear_technology_type_code, chld.ear_technology_type_label, chld.ear_type_last_change, chld.ear_name, chld.ear_api_id, chld.ear_api_method_id, chld.ear_api_method_name, chld.ear_api_method_version, chld.ear_api_name, chld.ear_api_type, chld.ear_api_version_id, chld.ear_is_complex, chld.ear_is_custom, chld.ear_is_local, chld.ear_it_service, chld.ear_integration, chld.ear_is_out, chld.ear_comment, chld.ear_din_infra, chld.ear_id_din_infra, chld.ear_namespace, chld.ear_object_id, chld.ear_object_type, chld.ear_polygon_code, chld.ear_polygon_label, chld.ear_polygon_type, chld.ear_stand_owner, chld.ear_url_openshift, chld.ear_category_sm, chld.ear_name_ir_sm, chld.ear_tech_resource_species, chld.ear_type_ir_sm, chld.ear_hdd, chld.ear_operating_system, chld.ear_ram, chld.ear_server_category_sm, chld.ear_server_name_sm, chld.ear_server_type_sm, chld.ear_released_in_pilot_operation_date, chld.ear_short_name, chld.ear_released_in_archive_operation_date, chld.ear_data_access_technology_code, chld.ear_data_access_technology,
chld.current_version,
li.id, li.obj1_id, li.obj2_id, li.type_id, li.direction,
roh.hierarchy__lvl+1
from repo_obj_links as li
join repo_objs as chld on chld.id = li.obj2_id
join roh on roh.obj__id = li.obj1_id
where roh.hierarchy__lvl+1 <= coalesce(max_lvl, roh.hierarchy__lvl+1)
--TODO: remove next line in production:
--and coalesce(chld.ear_status, '') not in ('DECOMMISSIONED', 'Выведен')
) select * from roh
$$
language sql
;

select hierarchy__lvl, link__type_id, count(*) 
--select max(hierarchy__lvl)
--select *
from f$repo_obj_hierarchy(array[
'71b33df7-3af5-4993-ad78-0c944bc19eb0' --ППРБ.РБ.Единый профиль клиента :: CI00636331
--,'62a01e6c-fe6a-42c0-bae5-de9366666eb8'  --ППРБ НСИ :: CI03137387
], 99)
group by hierarchy__lvl, link__type_id
order by hierarchy__lvl
;


--
-- OLD
--

--create or replace view v$ri_hierarchy_links as select * from repo_obj_links;
create or replace view v$ri_hierarchy_links as select * from repo_obj_links where coalesce(type_id, 0) < 100;
--select * from v$ri_hierarchy_links;

create or replace function f$ri_hierarchy(root_ci varchar)
returns table (id text, name text, type_id integer, level integer, sm_ci_code text, sm_type text, sm_subtype text, sm_hpc_status text, sm_environment text, sm_name text, sm_id_address_list text, sm_name2 text, sm_j_cpu_proc_count text, sm_j_cpu_count text, sm_j_ram text, sm_j_hdd text, sm_j_sdd text, sm_tps_placement text, ear_aris_code text, ear_centralization_level text, ear_cii_category text, ear_cloud_ready text, ear_code text, ear_criticality text, ear_date_last_change text, ear_full_name text, ear_guid text, ear_id_app text, ear_nickname text, ear_platform_ready text, ear_received_data_conf_level text, ear_received_data_integrity_level text, ear_short_desc text, ear_status text, ear_status_c3 text, ear_system_type text, ear_target_readiness text, ear_target_status text, ear_type text, ear_released_in_production_operation_date text, ear_functionality text, ear_app_tier_code text, ear_app_tier_label text, ear_author_last_change text, ear_destination_code text, ear_destination_label text, ear_is_container bool, ear_language_code text, ear_language_label text, ear_network text, ear_network_segment text, ear_network_zone text, ear_technology_code text, ear_technology_group_code text, ear_technology_group_label text, ear_technology_label text, ear_technology_type_code text, ear_technology_type_label text, ear_type_last_change text, ear_name text, ear_api_id text, ear_api_method_id text, ear_api_method_name text, ear_api_method_version text, ear_api_name text, ear_api_type text, ear_api_version_id text, ear_is_complex bool, ear_is_custom bool, ear_is_local bool, ear_it_service bool, ear_integration bool, ear_is_out bool, ear_comment text, ear_din_infra text, ear_id_din_infra text, ear_namespace text, ear_object_id integer, ear_object_type text, ear_polygon_code text, ear_polygon_label text, ear_polygon_type text, ear_stand_owner text, ear_url_openshift text, ear_category_sm text, ear_name_ir_sm text, ear_tech_resource_species text, ear_type_ir_sm text, ear_hdd text, ear_operating_system text, ear_ram text, ear_server_category_sm text, ear_server_name_sm text, ear_server_type_sm text, ear_released_in_pilot_operation_date text, ear_short_name text, ear_released_in_archive_operation_date text, ear_data_access_technology_code text, ear_data_access_technology text, up_id text)
language sql
as $$
  with recursive roh as (
    select root.id, root.name, root.type_id, root.lvl as level, root.sm_ci_code, root.sm_type, root.sm_subtype, root.sm_hpc_status, root.sm_environment, root.sm_name, root.sm_id_address_list, root.sm_name2, root.sm_j_cpu_proc_count, root.sm_j_cpu_count, root.sm_j_ram, root.sm_j_hdd, root.sm_j_sdd, root.sm_tps_placement, root.ear_aris_code, root.ear_centralization_level, root.ear_cii_category, root.ear_cloud_ready, root.ear_code, root.ear_criticality, root.ear_date_last_change, root.ear_full_name, root.ear_guid, root.ear_id_app, root.ear_nickname, root.ear_platform_ready, root.ear_received_data_conf_level, root.ear_received_data_integrity_level, root.ear_short_desc, root.ear_status, root.ear_status_c3, root.ear_system_type, root.ear_target_readiness, root.ear_target_status, root.ear_type, root.ear_released_in_production_operation_date, root.ear_functionality, root.ear_app_tier_code, root.ear_app_tier_label, root.ear_author_last_change, root.ear_destination_code, root.ear_destination_label, root.ear_is_container, root.ear_language_code, root.ear_language_label, root.ear_network, root.ear_network_segment, root.ear_network_zone, root.ear_technology_code, root.ear_technology_group_code, root.ear_technology_group_label, root.ear_technology_label, root.ear_technology_type_code, root.ear_technology_type_label, root.ear_type_last_change, root.ear_name, root.ear_api_id, root.ear_api_method_id, root.ear_api_method_name, root.ear_api_method_version, root.ear_api_name, root.ear_api_type, root.ear_api_version_id, root.ear_is_complex, root.ear_is_custom, root.ear_is_local, root.ear_it_service, root.ear_integration, root.ear_is_out, root.ear_comment, root.ear_din_infra, root.ear_id_din_infra, root.ear_namespace, root.ear_object_id, root.ear_object_type, root.ear_polygon_code, root.ear_polygon_label, root.ear_polygon_type, root.ear_stand_owner, root.ear_url_openshift, root.ear_category_sm, root.ear_name_ir_sm, root.ear_tech_resource_species, root.ear_type_ir_sm, root.ear_hdd, root.ear_operating_system, root.ear_ram, root.ear_server_category_sm, root.ear_server_name_sm, root.ear_server_type_sm, root.ear_released_in_pilot_operation_date, root.ear_short_name, root.ear_released_in_archive_operation_date, root.ear_data_access_technology_code, root.ear_data_access_technology, null as up_id
      from repo_objs as root
     where root.sm_ci_code = root_ci
     and coalesce(root.ear_status, '') not in ('DECOMMISSIONED', 'Выведен')
     union
    select chld.id, chld.name, chld.type_id, chld.lvl, chld.sm_ci_code, chld.sm_type, chld.sm_subtype, chld.sm_hpc_status, chld.sm_environment, chld.sm_name, chld.sm_id_address_list, chld.sm_name2, chld.sm_j_cpu_proc_count, chld.sm_j_cpu_count, chld.sm_j_ram, chld.sm_j_hdd, chld.sm_j_sdd, chld.sm_tps_placement, chld.ear_aris_code, chld.ear_centralization_level, chld.ear_cii_category, chld.ear_cloud_ready, chld.ear_code, chld.ear_criticality, chld.ear_date_last_change, chld.ear_full_name, chld.ear_guid, chld.ear_id_app, chld.ear_nickname, chld.ear_platform_ready, chld.ear_received_data_conf_level, chld.ear_received_data_integrity_level, chld.ear_short_desc, chld.ear_status, chld.ear_status_c3, chld.ear_system_type, chld.ear_target_readiness, chld.ear_target_status, chld.ear_type, chld.ear_released_in_production_operation_date, chld.ear_functionality, chld.ear_app_tier_code, chld.ear_app_tier_label, chld.ear_author_last_change, chld.ear_destination_code, chld.ear_destination_label, chld.ear_is_container, chld.ear_language_code, chld.ear_language_label, chld.ear_network, chld.ear_network_segment, chld.ear_network_zone, chld.ear_technology_code, chld.ear_technology_group_code, chld.ear_technology_group_label, chld.ear_technology_label, chld.ear_technology_type_code, chld.ear_technology_type_label, chld.ear_type_last_change, chld.ear_name, chld.ear_api_id, chld.ear_api_method_id, chld.ear_api_method_name, chld.ear_api_method_version, chld.ear_api_name, chld.ear_api_type, chld.ear_api_version_id, chld.ear_is_complex, chld.ear_is_custom, chld.ear_is_local, chld.ear_it_service, chld.ear_integration, chld.ear_is_out, chld.ear_comment, chld.ear_din_infra, chld.ear_id_din_infra, chld.ear_namespace, chld.ear_object_id, chld.ear_object_type, chld.ear_polygon_code, chld.ear_polygon_label, chld.ear_polygon_type, chld.ear_stand_owner, chld.ear_url_openshift, chld.ear_category_sm, chld.ear_name_ir_sm, chld.ear_tech_resource_species, chld.ear_type_ir_sm, chld.ear_hdd, chld.ear_operating_system, chld.ear_ram, chld.ear_server_category_sm, chld.ear_server_name_sm, chld.ear_server_type_sm, chld.ear_released_in_pilot_operation_date, chld.ear_short_name, chld.ear_released_in_archive_operation_date, chld.ear_data_access_technology_code, chld.ear_data_access_technology, li.obj1_id
      from repo_objs as chld
      join v$ri_hierarchy_links as li on li.obj2_id = chld.id
      join roh on roh.id = li.obj1_id
      where coalesce(chld.ear_status, '') not in ('DECOMMISSIONED', 'Выведен')
  )
  select * from roh
$$
;


-- ППРБ НСИ
select * from f$ri_hierarchy('CI03137387');
COPY (select * from f$ri_hierarchy('CI03137387')) TO '/home/lema/CI03137387.itat' DELIMITER ',' CSV HEADER;

-- ППРБ РБ ЕПК
update repo_objs set ear_code = null where id in (
select id from f$ri_hierarchy('CI00636331')
 where sm_type = 'server'
   and sm_subtype = 'Физический'
   and sm_ci_code is not null
   and ear_code is not null
)
;


select sm_type, sm_subtype, sm_tps_placement, count(*)
  from f$ri_hierarchy('CI03137387')
 group by sm_type, sm_subtype, sm_tps_placement
 order by sm_type, sm_subtype, sm_tps_placement
;


-- Integration point
select * from repo_objs where id = '287180b5-c00c-41ad-85e3-630b7ee12188';
select * from repo_objs where ear_type = 'IntegrationPoint';
delete from repo_objs where ear_type = 'IntegrationPoint';
delete from repo_obj_links where obj2_id = '287180b5-c00c-41ad-85e3-630b7ee12188';

select * from repo_objs ri where sm_ci_code = 'CI03137387';

select * from repo_obj_links ril where obj1_id = '62a01e6c-fe6a-42c0-bae5-de9366666eb8';
select * from repo_obj_links ril where obj1_id = 'f7b46e61-b717-11eb-5edc-005056b792d9';

--CI00718191 ППРБ Депозиты ЮЛ
select count(*) from f$ri_hierarchy('CI00718191');
--775

--CI03137387 ППРБ НСИ
select count(*) from f$ri_hierarchy('CI03137387');
--1962

select p.sm_ci_code, p.sm_type, c.sm_ci_code, c.sm_type
  from repo_obj_links l
  join repo_objs p on p.id = l.obj1_id
  join repo_objs c on c.id = l.obj2_id
 where l.id in (
  select link_id from (
    select * from f$ri_hierarchy('CI03137387')
    intersect
    select * from f$ri_hierarchy('CI00718191')
  ) f1
)
;
