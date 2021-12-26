import React from 'react';
import MapView, {Geojson} from 'react-native-maps';
import countries from './Data/countries.json';
import VNRegion from './Data/VNProvince.json'
import VNDistrict from './Data/VNDistrict.json'
const CommunityMap = props => (
  <MapView
    mapType="standard"
    provider="google"
    style={{ flex: 1 }}
  >
    {/* <Geojson
      geojson={VNDistrict}
      fillColor='white'
      strokeColor="#808080"
      strokeWidth={1}
    /> */}
    {VNDistrict.features.map(feature => {
   const insertedObject = {
       features: [feature]
   };
   if (
      //DaNang
      feature.properties.Ten_Huyen === 'Cam Le'||
      feature.properties.Ten_Huyen === 'Hai Chau'||
      feature.properties.Ten_Huyen === 'Ngu Hanh Son'||
      feature.properties.Ten_Huyen === 'Hoa Vang'||
      feature.properties.Ten_Huyen === 'Son Tra'||
      feature.properties.Ten_Huyen === 'Thanh Khe'|| 
      //QuangNgai
      feature.properties.Ten_Huyen === 'Binh Son'||
      feature.properties.Ten_Huyen === 'Ly Son'||
      feature.properties.Ten_Huyen === 'Minh Long'||
      feature.properties.Ten_Huyen ==='Son Tinh'||
      feature.properties.Ten_Huyen ==='Son Tay'||
      feature.properties.Ten_Huyen ==='Tra Bong'||
      feature.properties.Ten_Huyen === 'Tu Nghia'||
      //BinhDinh
      feature.properties.Ten_Huyen ==='An Lao'||
      //HaNoi
      feature.properties.Ten_Huyen ==='Ung Hoa'||
      feature.properties.Ten_Huyen ==='Ba Vi'||
      feature.properties.Ten_Huyen ==='Phu Xuyen'||
      feature.properties.Ten_Huyen ==='Phuc Tho'||
      feature.properties.Ten_Huyen ==='Soc Son'||
      feature.properties.Ten_Huyen ==='Son Tay'||
      feature.properties.Ten_Huyen ==='Thach That'||
      //HoChiMinh
      feature.properties.Ten_Huyen ==='Bình Chánh'||
      feature.properties.Ten_Huyen ==='Cần Giờ'||
      feature.properties.Ten_Huyen ==='Củ Chi'||
      feature.properties.Ten_Huyen ==='Hóc Môn'||
      feature.properties.Ten_Huyen ==='Quận 4'||
      feature.properties.Ten_Huyen ==='Quận 6'||
      feature.properties.Ten_Huyen ==='Quận 7'||
      feature.properties.Ten_Huyen ==='Quận 8'||
      feature.properties.Ten_Huyen ==='Tân Bình'||
      feature.properties.Ten_Huyen ==='Tân Phú'||
      //SocTrang
      feature.properties.Ten_Huyen ==='Cù Lao Dung'||
      //BenTre
      feature.properties.Ten_Huyen ==='Cho Lach'||
      //BacLieu
      feature.properties.Ten_Huyen ==='Đông Hải'||
      feature.properties.Ten_Huyen ==='Phước Long'||
      //TayNinh
      feature.properties.Ten_Huyen ==='Ben Cau'||
      feature.properties.Ten_Huyen ==='Go Dau'||
      feature.properties.Ten_Huyen ==='Trang Bang'||
      //DongThap
      feature.properties.Ten_Huyen ==='Hong Ngu'||
      feature.properties.Ten_Huyen ==='Lap Vo'||
      //TienGiang
      feature.properties.Ten_Huyen ==='Gò Công Tây'||
      //AnGiang
      feature.properties.Ten_Huyen ==='Cho Moi'||
      feature.properties.Ten_Huyen ==='Phu Tan'||
      feature.properties.Ten_Huyen ==='Tri Ton'||
      //KhanhHoa
      feature.properties.Ten_Huyen ==='Cam Ranh'||
      feature.properties.Ten_Huyen ==='Khanh Vinh'||
      feature.properties.Ten_Huyen ==='Ninh Hoa'||
      feature.properties.Ten_Huyen ==='Van Ninh'||
      //BinhPhuoc
      feature.properties.Ten_Huyen ==='Bu Dop'||
      //KienGiang
      feature.properties.Ten_Huyen ==='Giang Thanh'||
      feature.properties.Ten_Huyen ==='Phu Quoc'||
      feature.properties.Ten_Huyen ==='Tan Hiep'||
      feature.properties.Ten_Huyen ==='U Minh Thuong'||
      feature.properties.Ten_Huyen ==='Vinh Thuan'||
      //DakLak
      feature.properties.Ten_Huyen ==='Ea Kar'||
      //LamDong
      feature.properties.Ten_Huyen ==='Cat Tien'||
      feature.properties.Ten_Huyen ==='Da Teh'||
      feature.properties.Ten_Huyen ==='Dam Rong'||
      //Thanh Hoa
      feature.properties.Ten_Huyen ==='Thanh Hoa'||
      feature.properties.Ten_Huyen ==='Nga Son'||
      feature.properties.Ten_Huyen ==='Quang Xuong'||
      feature.properties.Ten_Huyen ==='Thach Thanh'||
      feature.properties.Ten_Huyen ==='Thọ Xuân'
      
      ) {
        return <Geojson
                  key={feature.properties.OBJECTID}
                  geojson={insertedObject}
                  fillColor={'#4FB89E'}
                  strokeColor='gray'
                  strokeWidth={2}
               />
   }else if(
            //BinhDinh
            feature.properties.Ten_Huyen ==='Phu My'||
            feature.properties.Ten_Huyen ==='Quy Nhon'||
            feature.properties.Ten_Huyen ==='Tay Son'||
            feature.properties.Ten_Huyen ==='Tuy Phuoc'||
            feature.properties.Ten_Huyen ==='Van Canh'||
            //DaNang
            feature.properties.Ten_Huyen ==='Lien Chieu'||
            //Baria-VungTau
            feature.properties.Ten_Huyen ==='Ba Ria'||
            feature.properties.Ten_Huyen ==='Long Dien'||
            feature.properties.Ten_Huyen ==='Vung Tau'||
            //SocTrang
            feature.properties.Ten_Huyen ==='Soc Trang'||
            feature.properties.Ten_Huyen ==='Châu Thành'||
            feature.properties.Ten_Huyen ==='Ke Sach'||
            feature.properties.Ten_Huyen ==='Long Phú'||
            feature.properties.Ten_Huyen ==='Mỹ Tú'||
            feature.properties.Ten_Huyen ==='Thanh Trì'||
            feature.properties.Ten_Huyen ==='Tran De'||
            feature.properties.Ten_Huyen ==='Vĩnh Châu'||
            //VinhLong
            feature.properties.Ten_Huyen ==='Vĩnh Long'||
            feature.properties.Ten_Huyen ==='Bình Tân'||
            feature.properties.Ten_Huyen ==='Long Hồ'||
            feature.properties.Ten_Huyen ==='Mang Thít'||
            feature.properties.Ten_Huyen ==='Tam Bình'||
            feature.properties.Ten_Huyen ==='Trà Ôn'||
            feature.properties.Ten_Huyen ==='Vũng Liêm'||
            //BenTre
            feature.properties.Ten_Huyen ==='Ben Tre'||
            feature.properties.Ten_Huyen ==='Ba Tri'||
            feature.properties.Ten_Huyen ==='Giong Tom'||
            feature.properties.Ten_Huyen ==='Mo Cay Bac'||
            feature.properties.Ten_Huyen ==='Thanh Phu'||
            //BacLieu
            feature.properties.Ten_Huyen ==='Bạc Liêu'||
            feature.properties.Ten_Huyen ==='Hòa Bình'||
            feature.properties.Ten_Huyen ==='Giá Rai'||
            feature.properties.Ten_Huyen ==='Vĩnh Lợi'||
            //DongThap
            feature.properties.Ten_Huyen ==='Chau Thanh'||
            feature.properties.Ten_Huyen ==='Lai Vung'||
            feature.properties.Ten_Huyen ==='Sa Dec'||
            feature.properties.Ten_Huyen ==='Tan Hong'||
            feature.properties.Ten_Huyen ==='Thap Muoi'||
            //TienGiang
            feature.properties.Ten_Huyen ==='Cai Lậy'||
            feature.properties.Ten_Huyen ==='Châu Thành'||
            feature.properties.Ten_Huyen ==='Gò Công Đông'||
            feature.properties.Ten_Huyen ==='Mỹ Tho'||
            //Binh Thuan
            feature.properties.Ten_Huyen ==='Bac Binh'||
            feature.properties.Ten_Huyen ==='Ham Thuan Nam'||
            feature.properties.Ten_Huyen ==='Tanh Linh'||
            feature.properties.Ten_Huyen ==='Tuy Phong'||
            //KhanhHoa
            feature.properties.Ten_Huyen ==='Khanh Son'||
            //CaMau
            feature.properties.Ten_Huyen ==='Ca Mau'||
            feature.properties.Ten_Huyen ==='Cai Nuoc'||
            feature.properties.Ten_Huyen ==='Dam Doi'||
            feature.properties.Ten_Huyen ==='Nam Can'||
            feature.properties.Ten_Huyen ==='Phu Tan'||
            feature.properties.Ten_Huyen ==='Thoi Binh'||
            feature.properties.Ten_Huyen ==='Tran Van Thoi'||
            feature.properties.Ten_Huyen ==='U Minh'||
            //BinhPhuoc
            feature.properties.Ten_Huyen ==='Binh Long'||
            feature.properties.Ten_Huyen ==='Bu Dang'||
            feature.properties.Ten_Huyen ==='Bu Gia Map'||
            feature.properties.Ten_Huyen ==='Chon Thanh'||
            feature.properties.Ten_Huyen ==='Dong Phu'||
            feature.properties.Ten_Huyen ==='Dong Xoai'||
            feature.properties.Ten_Huyen ==='Hon Quan'||
            feature.properties.Ten_Huyen ==='Loc Ninh'||
            //KienGiang
            feature.properties.Ten_Huyen ==='Kien Hai'||
            //LamDong
            feature.properties.Ten_Huyen ==='Duc Trong'
            ){
    return <Geojson
            key={feature.properties.OBJECTID} 
             geojson={insertedObject}
             fillColor={'#E2A83F'}
             strokeColor='gray'
              strokeWidth={2}
           />
   }else if(
            //VinhLong
            feature.properties.Ten_Huyen ==='Bình Minh'||
            //BenTre
            feature.properties.Ten_Huyen ==='Binh Dai'||
            feature.properties.Ten_Huyen ==='Chau Thanh'||
            feature.properties.Ten_Huyen ==='Mo Cay Nam'||
            //AnGiang
            feature.properties.Ten_Huyen ==='Chau Doc'||
            feature.properties.Ten_Huyen ==='Tinh Bien'||
            //BinhThuan
            feature.properties.Ten_Huyen ==='Phan Thiet'||
            //LamDong
            feature.properties.Ten_Huyen ==='Lac Duong'
            ){
    return <Geojson
            key={feature.properties.OBJECTID} 
             geojson={insertedObject}
             fillColor={'#F74445'}
             strokeColor='gray'
              strokeWidth={2}
           />
   }else if(
            //Quang Ngai
            feature.properties.Ten_Huyen ==='Quang Ngai'||
            feature.properties.Ten_Huyen ==='Ba To'||
            feature.properties.Ten_Huyen ==='Duc Pho'||
            feature.properties.Ten_Huyen ==='Mo Duc'||
            feature.properties.Ten_Huyen ==='Nghia Hanh'||
            feature.properties.Ten_Huyen ==='Son Ha'||
            //BinhDinh
            feature.properties.Ten_Huyen ==='An Nhon'||
            feature.properties.Ten_Huyen ==='Hoai An'||
            feature.properties.Ten_Huyen ==='Hoai Nhon'||
            feature.properties.Ten_Huyen ==='Phu Cat'||
            feature.properties.Ten_Huyen ==='Vinh Thanh'||
            //HaNoi
            feature.properties.Ten_Huyen ==='Bac Tu Liem'||
            feature.properties.Ten_Huyen ==='Ba Dinh'||
            feature.properties.Ten_Huyen ==='Cau Giay'||
            feature.properties.Ten_Huyen ==='Chuong My'||
            feature.properties.Ten_Huyen ==='Dong Da'||
            feature.properties.Ten_Huyen ==='Dan Phuong'||
            feature.properties.Ten_Huyen ==='Dong Anh'||
            feature.properties.Ten_Huyen ==='Gia Lam'||
            feature.properties.Ten_Huyen ==='Ha Dong'||
            feature.properties.Ten_Huyen ==='Hai Ba Trung'||
            feature.properties.Ten_Huyen ==='Hoai Duc'||
            feature.properties.Ten_Huyen ==='Hoan Kiem'||
            feature.properties.Ten_Huyen ==='Hoang Mai'||
            feature.properties.Ten_Huyen ==='Long Bien'||
            feature.properties.Ten_Huyen ==='My Duc'||
            feature.properties.Ten_Huyen ==='Me Linh'||
            feature.properties.Ten_Huyen ==='Nam Tu Liem'||
            feature.properties.Ten_Huyen ==='Quoc Oai'||
            feature.properties.Ten_Huyen ==='Tay Ho'||
            feature.properties.Ten_Huyen ==='Thanh Oai'||
            feature.properties.Ten_Huyen ==='Thanh Tri'||
            feature.properties.Ten_Huyen ==='Thanh Xuan'||
            feature.properties.Ten_Huyen ==='Thuong Tin'||
            //Baria-VungTau
            feature.properties.Ten_Huyen ==='Chau Duc'||
            feature.properties.Ten_Huyen ==='Dat Do'||
            feature.properties.Ten_Huyen ==='Xuyen Moc'||
            //SocTrang
            feature.properties.Ten_Huyen ==='My Xuyen'||
            feature.properties.Ten_Huyen ==='Ngã Năm'||
            //BacLieu
            feature.properties.Ten_Huyen ==='Hồng Dân'||
            //TayNinh
            feature.properties.Ten_Huyen ==='Tay Ninh'||
            feature.properties.Ten_Huyen ==='Chau Thanh'||
            feature.properties.Ten_Huyen ==='Duong Minh Chau'||
            feature.properties.Ten_Huyen ==='Hoa Thanh'||
            feature.properties.Ten_Huyen ==='Tan Bien'||
            feature.properties.Ten_Huyen ==='Tan Chau'||     
            //DongThap
            feature.properties.Ten_Huyen ==='Cao Lanh'||
            feature.properties.Ten_Huyen ==='TP Cao Lanh'||
            feature.properties.Ten_Huyen ==='Hong Ngu'||
            feature.properties.Ten_Huyen ==='Tam Nong'||
            feature.properties.Ten_Huyen ==='Thanh Binh'|| 
            //TienGiang
            feature.properties.Ten_Huyen ==='Cái Bè'||
            feature.properties.Ten_Huyen ==='Cai Lậy'||
            feature.properties.Ten_Huyen ==='Chợ Gạo'||
            feature.properties.Ten_Huyen ==='Gò Công'||
            feature.properties.Ten_Huyen ==='Tân Phú Đông'||
            feature.properties.Ten_Huyen ==='Tân Phước'||
            //AnGiang
            feature.properties.Ten_Huyen ==='An Phu'||
            feature.properties.Ten_Huyen ==='Chau Phu'||
            feature.properties.Ten_Huyen ==='Chau Thanh'||
            feature.properties.Ten_Huyen ==='Long Xuyen'||
            feature.properties.Ten_Huyen ==='Tan Chau'||
            feature.properties.Ten_Huyen ==='Thoai Son'||
            //BinhThuan
            feature.properties.Ten_Huyen ==='Duc Linh'||
            feature.properties.Ten_Huyen ==='Ham Tan'||
            feature.properties.Ten_Huyen ==='Ham Thuan Bac'||
            feature.properties.Ten_Huyen ==='La Gi'||
            feature.properties.Ten_Huyen ==='Phu Qui'||
            //KhanhHoa
            feature.properties.Ten_Huyen ==='Cam Lam'||
            feature.properties.Ten_Huyen ==='Dien Khanh'||
            feature.properties.Ten_Huyen ==='Nha Trang'||
            //CaMau
            feature.properties.Ten_Huyen ==='Ngoc Hien'||
            //BinhPhuoc
            feature.properties.Ten_Huyen ==='Phu Rieng'||
            feature.properties.Ten_Huyen ==='Phuoc Long'||
            //KienGiang
            feature.properties.Ten_Huyen ==='An Bien'||
            feature.properties.Ten_Huyen ==='An Minh'||
            feature.properties.Ten_Huyen ==='Chau Thanh'||
            feature.properties.Ten_Huyen ==='Giong Rieng'||
            feature.properties.Ten_Huyen ==='Go Quao'||
            feature.properties.Ten_Huyen ==='Ha Tien'||
            feature.properties.Ten_Huyen ==='Hon Dat'||
            feature.properties.Ten_Huyen ==='Kien Luong'||
            feature.properties.Ten_Huyen ==='Rach Gia'||
            //HauGiang
            feature.properties.Ten_Huyen ==='Chau Thanh'||
            feature.properties.Ten_Huyen ==='Long My'||
            feature.properties.Ten_Huyen ==='Nga Bay'||
            feature.properties.Ten_Huyen ==='Phung Hiep'||
            feature.properties.Ten_Huyen ==='Vi Thanh'||
            feature.properties.Ten_Huyen ==='Vi Thuy'||
            feature.properties.Ten_Huyen ==='Chau Thanh A'||
            //DakLak
            feature.properties.Ten_Huyen ==='Buon Don'||
            feature.properties.Ten_Huyen ==='Buon Ma Thuot'||
            feature.properties.Ten_Huyen ==='Cu Kuin'||
            feature.properties.Ten_Huyen ==="Cu M'gar"||
            feature.properties.Ten_Huyen ==="Ea H'leo"||
            feature.properties.Ten_Huyen ==="Ea Sup"||
            feature.properties.Ten_Huyen ==='Krong A Na'||
            feature.properties.Ten_Huyen ==='Krong Bong'||
            feature.properties.Ten_Huyen ==='Krong Buk'||
            feature.properties.Ten_Huyen ==='Krong Nang'||
            feature.properties.Ten_Huyen ==='Krong Pac'||
            feature.properties.Ten_Huyen ==='Lak'||
            feature.properties.Ten_Huyen === "M'Drak"||
            //LamDong
            feature.properties.Ten_Huyen ==='Bao Loc'||
            feature.properties.Ten_Huyen ==='Bao Lam'||
            feature.properties.Ten_Huyen ==='Da Huoai'||
            feature.properties.Ten_Huyen ==='Da Lat'||
            feature.properties.Ten_Huyen ==='Di Linh'||
            feature.properties.Ten_Huyen ==='Don Duong'||
            feature.properties.Ten_Huyen ==='Lam Ha'||
            //QuangNam
            feature.properties.Ten_Huyen ==='Bac Tra My'||
            feature.properties.Ten_Huyen ==='Dai Loc'||
            feature.properties.Ten_Huyen ==='Dien Ban'||
            feature.properties.Ten_Huyen ==='Dong Giang'||
            feature.properties.Ten_Huyen ==='Duy Xuyen'||
            feature.properties.Ten_Huyen ==='Hoi An'||
            feature.properties.Ten_Huyen ==='Hiep Duc'||
            feature.properties.Ten_Huyen ==='Nam Giang'||
            feature.properties.Ten_Huyen ==='Nam Tra My'||
            feature.properties.Ten_Huyen ==='Nong Son'||
            feature.properties.Ten_Huyen ==='Nui Thanh'||
            feature.properties.Ten_Huyen ==='Phu Ninh'||
            feature.properties.Ten_Huyen ==='Phuoc Son'||
            feature.properties.Ten_Huyen ==='Que Son'||
            feature.properties.Ten_Huyen ==='Tam Ky'||
            feature.properties.Ten_Huyen ==='Tay Giang'||
            feature.properties.Ten_Huyen ==='Thang Binh'||
            feature.properties.Ten_Huyen ==='Tien Phuoc'||
           //ThanhHoa
           feature.properties.Ten_Huyen ==='Bim Son'||
           feature.properties.Ten_Huyen ==='Ba Thuoc'||
           feature.properties.Ten_Huyen ==='Cam Thuy'||
           feature.properties.Ten_Huyen ==='Dong Son'||
           feature.properties.Ten_Huyen ==='Hau Loc'||
           feature.properties.Ten_Huyen ==='Ha Trung'||
           feature.properties.Ten_Huyen ==='Hoang Hoa'||
           feature.properties.Ten_Huyen ==='Lanh Chanh'||
           feature.properties.Ten_Huyen ==='Muong Lat'||
           feature.properties.Ten_Huyen ==='Ngoc Lac'||
           feature.properties.Ten_Huyen ==='Nhu Thanh'||
           feature.properties.Ten_Huyen ==='Nhu Xuan'||
           feature.properties.Ten_Huyen ==='Nong Cong'||
           feature.properties.Ten_Huyen ==='Quan Hoa'||
           feature.properties.Ten_Huyen ==='Quan Son'||
           feature.properties.Ten_Huyen ==='Sam Son'||
           feature.properties.Ten_Huyen ==='Thieu Hoa'||
           feature.properties.Ten_Huyen ==='Thuong Xuan'||
           feature.properties.Ten_Huyen ==='Trieu Son'||
           feature.properties.Ten_Huyen ==='Vinh Loc'||
           feature.properties.Ten_Huyen ==='Yen Dinh'

   ){
    return <Geojson
            key={feature.properties.OBJECTID} 
             geojson={insertedObject}
             fillColor={'#F7F745'}
             strokeColor='gray'
              strokeWidth={2}
           />
   }else if(
    feature.properties.Ten_Huyen ==='Tay Tra'||
    //HoChiMinh
    feature.properties.Ten_Huyen ==='Phú Nhuận'||
    //Baria-VungTau
    feature.properties.Ten_Huyen ==='Tan Thanh'||
    //DakLak
    feature.properties.Ten_Huyen ==='Buon Ho'||
    //ThanhHoa
    feature.properties.Ten_Huyen ==='Tinh Gia'
   ){
    return <Geojson
            key={feature.properties.OBJECTID} 
             geojson={insertedObject}
             fillColor={'#90969D'}
             strokeColor='gray'
              strokeWidth={2}
           />
   }
    
    
})}

  </MapView>
);
export default CommunityMap;