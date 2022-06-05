import {gql} from '@apollo/client'
export const INSERT_MOTOR = gql`
mutation MyMutation($ankus_sayisi: String!, $baglanti: String!, $brand: String!, $customer: String!, $description: String!, $devir: String!, $hatve: String!, $hp: String!, $kw: String!, $motor_akimi: String!, $rulman_no: String!, $rotor_capi: String!, $sac_boyu: String!, $saran: String!, $sargi_status: String!, $seri_no: String!, $sipir: String!, $soken: String!, $tel_adet: String!, $tel_capi: String!, $total_tel: String!, $voltaj: String!) {
    insert_motors_one(object: {ankus_sayisi: $ankus_sayisi, baglanti: $baglanti, brand: $brand, customer: $customer, description: $description, devir: $devir, hatve: $hatve, hp: $hp, kw: $kw, motor_akimi: $motor_akimi, rulman_no: $rulman_no, rotor_capi: $rotor_capi, sac_boyu: $sac_boyu, saran: $saran, sargi_status: $sargi_status, seri_no: $seri_no, sipir: $sipir, soken: $soken, tel_adet: $tel_adet, tel_capi: $tel_capi, total_tel: $total_tel, voltaj: $voltaj}) {
      ankus_sayisi
      baglanti
      brand
      created_at
      customer
      description
      devir
      hatve
      hp
      id
      kw
      motor_akimi
      rotor_capi
      rulman_no
      sac_boyu
      saran
      sargi_status
      seri_no
      sipir
      soken
      tel_adet
      tel_capi
      total_tel
      voltaj
    }
  }
  

`