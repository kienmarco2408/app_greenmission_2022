import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const List_news = () => {
  const navigation = useNavigation();
  const news = [
    {
      id: 1,
      title:
        "Học về mô hình 3Rs - Tái chế, Tái sử dụng, Giảm thiểu - và vì sao nó lại cần thiết?",
      img: require("../storage/imgs/list_news/img1.jpg"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img1_2.jpg"),
      content: [
        "Mô hình 3Rs của môi trường - Reduce (giảm thiểu), Reuse(tái sử dụng), Recycle(tái chế) - đã xuất hiện được một thời gian ở Việt Nam nhưng nhiều người đã tỏ ra không quan tâm và không tuân theo mô hình này. Chính phủ Việt Nam đã nói rằng đây là điều tốt nhất khi họ thúc đẩy việc bảo tồn khí đốt, cao su, tơ lụa và các nguồn tài nguyên khan hiếm khác. \n \n",
        "Hàng năm, chúng ta lãng phí khoảng ⅓ tỷ tấn thực phẩm, tương đương 1.2 nghìn tỷ đô la, thải ra khoảng 400 triệu tấn nhựa, và riêng Việt Nam chúng ta thải ra hơn 15 triệu tấn rác. Hơn 30% chất thải của chúng ta là chất liệu đóng gói. Tất cả những đống rác này được mang đến đâu để xử lý? Khoảng 85% rác của chúng ta được mang đến những bãi rác hoặc bãi chôn lấp, mặc dù chúng ta đang ngày càng thiếu chỗ và đất đai."
      ],
      postTitle1: "Vì sao lại là mô hình 3Rs?",
      content1: [
        "Các công ty sản xuất hàng tiêu dùng luôn bán cho chúng ta một hóa đơn hàng mới. Một số người tin rằng chúng ta có thể mua sắm theo cách của bản thân để giúp cho một Trái Đất trong sạch và tươi đẹp hơn. Trong nhiều năm qua, các quảng cáo thì luôn nói với chúng ta rằng những chiếc xe tuyệt vời sẽ giúp chúng ta thoải mái hơn, những loại nước ngọt dành cho người ăn kiêng sẽ giúp chúng ta trở nên tốt đẹp hơn. Nhưng có một số thứ mà tiền, hay quảng cáo, cũng không thể mua được, và một môi trường trong sạch chính là một trong số đó. Thực tế khắc nghiệt đó là sự nóng lên toàn cầu, nạn phá rừng, và các vấn đề khác trên Trái Đất không thể được giải quyết bằng cách thay đổi giữa các nhãn hàng. \n \n",
        "Chúng ta cần có nguồn lực để sản xuất và vận chuyển tất cả các sản phẩm, ngay cả những sản phẩm được làm từ việc tái chế. Năng lượng cần phải được dùng một cách ít nhất. Ngoài ra, việc tiêu dùng tài nguyên khiến cho thế giới cạn kiệt hơn và không thể trở nên tốt đẹp hơn được. Vì vậy, chúng ta nên mua cái gì khi mà chúng ta đều đang mong muốn được mua những thứ mới? Không có gì tốt hơn cho Trái Đất là mua những vật liệu “xanh”.\n \n",
        "Và tất nhiên là sẽ có những trường hợp ngoại lệ. Nếu ô tô hoặc thiết bị hiện tại của bạn là một thiết bị tiêu hao năng lượng khủng khiếp, bạn có thể tiết kiệm tài nguyên về lâu dài bằng cách thay thế nó bằng một mẫu xe tiết kiệm năng lượng. Và nó sẽ giúp ích cho chính sức khỏe của bạn và gia đình bằng cách thay những sản phẩm có thể rò rỉ chất độc, chẳng hạn như đồ chơi trẻ em bằng nhựa PVC.\n \n",
        "Nhựa là một tác hại mà quá trình hiện đại hóa đã mang lại. Mặc dù chúng giúp cho cuộc sống hàng ngày của chúng ta dễ hàng hơn, chúng cũng gây ra các vấn đề. Một mối quan ngại ngày càng tăng đối với nhiều người là số lượng nhựa tìm thấy đường vào các đại dương và hồ của chúng ta. Cơ quan Khí quyển và Đại dương Quốc gia (NOAA) ước tính rằng 8 triệu tấn nhựa đi vào các đại dương mỗi năm. Các hạt vi phân nhựa - các hạt nhựa phân hủy nhỏ - đang được tìm thấy ở nhiều nơi, kể cả những vùng xa xôi như Dãy núi Pyrenees, Nam Cực, và Bắc Cực.",
        "Tuy nhiên, thường thì việc tuân theo quy cũ sẽ tốt cho môi trường hơn: giảm thiểu, tái sử dụng, tái chế. Tôi biết rằng bạn đã nghe nó hàng nghìn lần trước đây, nhưng với từ “xanh” bây giờ được dùng chung trong dịch vụ bán hàng, thì 3 Rs là một cụm từ - và là một nguyên tắc - đáng để được hồi sinh.\n \n"
      ],
      imgPost2: require("../storage/imgs/list_news/img1_1.jpg"),
      postTitle2: "Giảm thiểu",
      content2: [
        "Giảm thiểu có nghĩa là sử dụng ít tài nguyên hơn ngay từ đầu. Đây là cách hiệu quả nhất trong 3 R và cũng là cách đầu tiên. Nó cũng là cách khó nhất vì nó đòi hỏi phải bỏ đi một số những quan niệm của con người, bao gồm “càng lớn càng tốt”, “tiện lợi là ưu tiên hàng đầu”. Nhưng bạn không cần phải bỏ đi hoàn toàn những thói quen đó. Giảm thiểu là một từ so sánh, và nó nói: hãy quay trở lại vị trí hiện tại của bạn. \n \n",
        "Khi bạn đi mua sắm, hãy mua sắm theo cách khác. Hãy tìm những thứ sẽ tồn tại lâu dài, những thứ không chỉ bền và tốt mà còn phải hữu ích và đẹp để bạn hài lòng trong thời gian dài. Số tiền bạn chi thêm để mua lại những vật dụng đấy sẽ được bù đắp bằng số tiền bạn không chi để thay thế những vật dụng đó. Đừng đi theo những xu hướng hiện đại nhất. Bởi vì chúng sẽ hỏng nhanh nhất.\n \n",
        "Với đồ điện tử, sự đầu tư có thể sẽ có lợi ích lâu dài. Một máy tính tối tân vẫn sẽ chạy phần mềm ra mắt hai năm sau và một hệ thống quản lý lớn sẽ chứa đủ các trang web to lớn mà công ty sẽ xây dựng sau đó. Tương tự như vậy, một chiếc điện thoại di động có bàn phím chữ (hoặc Iphone) sẽ giúp bạn đi qua kỷ nguyên nhắn tin đang tồn tại. Khi bạn mua hàng, hãy tìm hiểu cách để duy trì tính tối ưu và lâu dài của mặt hàng. Sau đó, chỉ đi bảo trì và sửa chữa khi cần thiết."
      ],
      imgPost3: require("../storage/imgs/list_news/img1_3.jpg")
    },
    {
      id: 2,
      title: "Thông tin về các loại rác thải và cách xử lý",
      img: require("../storage/imgs/list_news/img2.jpg"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img1_1.jpg"),
      content: [
        "Có lẽ mọi người đều biết rằng ở nước ta tình trạng rác thải bừa bãi vẫn còn tồn tại, nhiều vùng bị ô nhiễm về nguồn nước, đất và không gian sống. Để giải quyết thực trạng này thì sớm nhất người dân cần được học cách thức phân loại, xử lý rác và tuyên truyền nâng cao ý thức thu dọn rác từ hoạt động hàng ngày nhỏ nhất.\n \n",
        "Rác thải từ nhiều nguồn đổ ra lúc nào cũng nhiều, việc phân loại đúng cách sẽ đỡ được công đoạn vất vả cho công nhân môi trường nhanh chóng xử lý rác trong ngày. Lượng rác ở các bãi tập kết bao giờ cũng chất đống cao vút, do vậy người dân thực hiện phân loại ngay từ đầu nguồn như ở nhà, cơ quan, đi ra ngoài để riêng ra thì sẽ góp sức vào việc làm sạch đẹp môi trường hơn.\n \n",
        "Thay vào đó thì cơ quan chức năng nên thiết lập các thiết bị chứa rác riêng biệt cho nhiều loại rác để người dân bỏ đúng từng nơi. Như vậy thì các túi rác sẽ được bỏ đúng nơi thay vì bỏ tất cả lẫn lộn vào nhau, sau đó tới nơi tập kết lại phải đổ ra rồi phân loại mới đem đi xử lý hết sức tốn công và mất thời gian.\n \n",
        "Ở các thành phố lớn, khu đô thị và các vùng miền đã được phổ cập chính sách thiết kế thùng rác nhiều ngăn hoặc đặt nhiều thùng rác được phân loại cạnh nhau. Ví dụ ở TPHCM, Hà Nội xuất hiện thùng rác nhiều ngăn ở khu vực công cộng như công viên, trường học, vườn hoa, bảo tàng,…Mọi người đọc thông tin phân loại rác hướng dẫn ở trên thùng để đổ đúng vị trí quy định sẽ chung tay cho môi trường trong lành hơn."
      ],
      postTitle1: "Các cách nhận biết rác thải môi trường",
      content1: [
        "Rác thải ngày nay được phân thành 3 loại chính: Rác hữu cơ, Rác vô cơ, và Rác tái chế. \n \n",
        "Rác hữu cơ: \n \n   ",
        "Loại rác này dễ phân hủy khi đi vào môi trường, tái sử dụng cho việc làm phân bón chăm sóc cây trồng, làm tăng độ màu mỡ cho đất và thức ăn cho động vật. Nguồn tạo ra rác hữu cơ từ thức ăn bỏ đi, vỏ rau củ quả, vỏ trứng, cây cỏ, hoa lá…Loại rác này không chứa chất độc hại nguy hiểm cho môi trường.\n \n",
        "Rác vô cơ: \n \n    ",
        "Rác vô cơ hầu hết là rác không thể sử dụng được nữa khi người dân bỏ đi chủ yếu là cần được xử lý đúng cách làm sao để không làm ô nhiễm không khí, đất, nước và ảnh hưởng tới sức khỏe người dân xung quanh. Nguồn tạo ra rác thải vô cơ có nhiều như vật liệu xây dựng bỏ đi, đồ dùng sinh hoạt, vỏ bọc thực phẩm, túi nilon, thiết bị đời sống hàng ngày,… Rác vô cơ thường được lựa chọn đốt hoặc chôn lấp. Nhưng nhìn chung có chứa chất độc hại và khó phân hủy về lâu dài.\n \n",
        "Rác tái chế: \n \n   ",
        "Rác tái chế nghĩa là rác thải ra môi trường đã qua sử dụng rồi nhưng vẫn có thể được tận dụng tạo ra các sản phẩm mới có ích. Ví dụ vỏ nhựa, lon bia, chai, hộp đựng thực phẩm,…Sản phẩm bỏ đi này có thể làm nguồn nguyên liệu tiếp tục tạo ra vật dụng cần thiết cho cuộc sống như hộp đựng bút thước, lọ hoa decor, vật liệu trang trí căn phòng phong cách mới,… Việc phân loại rác nêu trên dần đã được cơ quan chức năng phổ biến kiến thức cho người dân thực hiện. Nếu cách phân loại rác thải thủ công vất vả khi tới nơi tập kết thì gợi ý cho mọi người sử dụng máy tách rác cực kỳ hiệu quả trong việc phân loại rác nhanh chóng, đỡ tốn công sức của nhân công để tập trung xử lý khối lượng rác khổng lồ."
      ],
      imgPost2: require("../storage/imgs/list_news/img2_1.jpg"),
      postTitle2: "Cách để tái chế rác thải như thế nào?",
      content2: [
        "Câu trả lời đơn giản nhất là: hãy làm những điều nhỏ, thường xuyên và nhất quán, bắt đầu từ những việc ở nhà. Cho dù đó là một căn hộ nhỏ ở trung tâm thành phố hay một ngôi nhà lớn ở nông thôn, nghĩa vụ tái chế là của tất cả mọi người. Một căn bếp nhỏ không phải là lý do biện hộ, vì có rất nhiều thùng rác tái chế với nhiều hình dạng và kích cỡ khác nhau được bày bán ở bất kỳ cửa hàng nào và trên mạng. Để tái chế, bạn cũng có thể sử dụng túi giấy và hộp các tông, hoặc đơn giản là đặt tất cả đồ tái chế vào một chỗ và phân loại trực tiếp vào các thùng thích hợp."
      ],
      imgPost3: require("../storage/imgs/list_news/img1_3.jpg")
    },
    {
      id: 3,
      title: "Cách để tái chế rác và vì sao chúng ta nên tái chế",
      img: require("../storage/imgs/list_news/img3.jpg"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img3_1.png"),
      content: [
        "Phân loại rác thải không chỉ là một hành động, mà đó còn là một nghĩa vụ. Tuy nhiên, mọi người thường không biết phân loại rác và nên vứt rác vào loại thùng nào. Làm thế nào để có thể tái chế rác theo các quy định và giúp ích cho hành tinh của chúng ta? Dưới đây là một số cách và mẹo để giúp ích cho bạn.\n \n",
        "Việc hạn chế rác thải hàng ngày là công việc luôn luôn được khuyến khích. Dù chúng ta gọi đây là xu hướng ít chất thải hơn, hay nhận thức môi trường, hay là nhu cầu cá nhân, mỗi chúng ta nên giảm thiểu chất thải đến mức thấp nhất. Hãy đối mặt với nó - ít hơn không có nghĩa là không có. Nó là bất khả thi để không tạo ra bất cứ một chút rác thải nào trong cuộc sống hàng ngày của chúng ta. Không sớm thì muộn, một số hoạt động mua sắm và các hoạt động thường ngày của chúng ta sẽ dẫn đến hậu quả của việc lại làm đầy thùng rác. Và nó là những việc không thể không xảy ra."
      ],
      postTitle1: "Vì sao chúng ta nên tái chế?",
      content1: [
        "Lượng rác thải trung bình của người dân Việt Nam vào năm ngoái là 438 kg! Điều này có nghĩa là khoảng 1.2 kg rác thải mỗi ngày. Điều đáng lo ngại không kém là thực tế chỉ có 20-30% trong số đó được tái chế. \n \n",
        "Ngoài các vấn đề môi trường, từ khía cạnh kinh tế, tái chế có nghĩa là tiết kiệm đáng kể - không chỉ trên toàn cầu, mà còn cho từng cá nhân. Nói một cách đơn giản, một nửa số rác đổ vào thùng của chúng ta nên được tái chế. Ở một số thành phố lớn, chi phí cho những món đồ không tái chế được gần như là gấp đôi chi phi cho những đồ có thể tái chế. \n \n   ",
        "Ngoài ra, chi phí cho những đồ không tái chế được cũng do môi trường chúng ta sinh ra. Các bãi chôn lấp lan rộng, phát thải khí nhà kính, ô nhiễm đất và nước, nguy cơ hỏa hoạn - chỉ là một vài trong số những mối đe dọa lớn do chúng ta tạo nên."
      ],
      imgPost2: require("../storage/imgs/list_news/img2_1.jpg"),
      postTitle2: "Cách để tái chế rác thải như thế nào?",
      content2: [
        "Câu trả lời đơn giản nhất là: hãy làm những điều nhỏ, thường xuyên và nhất quán, bắt đầu từ những việc ở nhà. Cho dù đó là một căn hộ nhỏ ở trung tâm thành phố hay một ngôi nhà lớn ở nông thôn, nghĩa vụ tái chế là của tất cả mọi người. Một căn bếp nhỏ không phải là lý do biện hộ, vì có rất nhiều thùng rác tái chế với nhiều hình dạng và kích cỡ khác nhau được bày bán ở bất kỳ cửa hàng nào và trên mạng. Để tái chế, bạn cũng có thể sử dụng túi giấy và hộp các tông, hoặc đơn giản là đặt tất cả đồ tái chế vào một chỗ và phân loại trực tiếp vào các thùng thích hợp."
      ],
      imgPost3: require("../storage/imgs/list_news/img1_3.jpg")
    }
  ];
  return news.map((data, index) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            title: data.title,
            img: data.img,
            view: data.view,
            content: data.content,
            imgPost1: data.imgPost1,
            postTitle1: data.postTitle1,
            content1: data.content1,
            imgPost2: data.imgPost2,
            postTitle2: data.postTitle2,
            content2: data.content2,
            imgPost3: data.imgPost3
          })
        }
        key={data.id}
      >
        <View
          key={data.id}
          style={{
            width: 335,
            height: 92,
            marginHorizontal: "10%",
            flexDirection: "row",
            marginBottom: 16
          }}
        >
          <View>
            <Image source={data.img} style={{ width: 82, height: 92 }} />
          </View>
          <View style={{ marginLeft: 12 }}>
            <View style={{ width: 205, height: 60 }}>
              <Text>{data.title}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15
              }}
            >
              <Feather name="user" />
              <Text> {data.view}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

export default List_news;
