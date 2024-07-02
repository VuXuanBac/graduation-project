# Tóm tắt kiến thức và Ý tưởng

## Code Result

Bài toán ràng buộc:

- Thêm biến $R_b^{(S)}$ vào làm biến quyết định cũng không làm tăng đáng kể $\max sigma^{(S)}$ ==> Chỉ cần một biến $sigma^{(S)}$ là đủ

## Random Think

- CSIT càng tốt thì càng có nhiều chiến lược mã hóa và xử lý tín hiệu để tăng độ an toàn => Tuy nhiên ở đây xem xét trường hợp không có lợi là chỉ có các tri thức thống kê về kênh truyền.

Khi đó mức độ an toàn được gia tăng bằng các lựa chọn hợp tác.

- Có thể mở rộng ra nhiều PU và nhiều SU, khi đó SU cũng có thể lựa chọn

- Với đặc điểm có thể tùy chỉnh mức độ an toàn của các độ đo hiệu năng (an toàn một phần - he2016), cũng xem xét việc gia tăng cơ hội được truyền bằng việc giảm yêu cầu về mức độ an toàn.

- Bài toán đang biểu diễn dưới dạng bên SU đưa ra đề xuất, tuy nhiên với đặc điểm của bài toán tối ưu, ta có thể để cả hai bên cùng giải và tự xác định công suất phát của mình => Giảm lượng tương tác giữa các bên....?? [Thuyết phục hơn]

- Mục tiêu bài nghiên cứu này là xem xét trường hợp thực tế nhất có thể:

  - Không đòi hỏi CSIT hoàn hảo
  - Tùy chỉnh mức độ an toàn
  - Hợp tác cùng có lợi trong CRN
  - Tốc độ truyền cố định: Giảm độ phức tạp + Phù hợp một số ứng dụng như multimedia.

- Tuy nhiên có hạn chế:

  - Sử dụng mô hình tập trung giữa PTx và STx ==> Tính thực tế đáng ra là: PU không cần biết gì về SU và SU cần tự điều chỉnh với lượng thông tin ít ỏi về PU. [Zhang2010 - Dynamic resource allocation]

- Để đảm bảo reliability, cần cơ chế on-off 1 bit từ bên nhận về bên gửi

  - Khi đó, constraint chuyển thành thông lượng
  - Tuy nhiên, do đang hợp tác nên mặc dù không truyền thông tin vẫn **cần truyền gì đó**? Tin ngẫu nhiên?

- Cần phát triển để lựa chọn $R_s^P, R_s^S$ phù hợp với điều kiện kênh truyền.

- Việc sử dụng interference: Đối với kẻ nghe lén đối với PU, anh ta sẽ coi tín hiệu nhận từ SU là nhiễu (không giải mã) và tương tự với Eav của SU.

- Cần phải nói thêm rằng các bên sẽ coi tín hiệu bên còn lại là nhiễu, và không sử dụng SIC.

## Deeper Understanding

- Kênh truyền là quasi-static fading

- Fading:

  - **Ergodic Fading**: Khi tín hiệu trải nghiệm kênh truyền với thời gian đủ dài thì kênh truyền tác động giống như các đặc tính thống kê của nó
  - **Quasi-static Fading**: Các hệ số fading không thay đổi trong khoảng thời gian truyền 1 symbols và có thể khác nhau (nhưng **thay đổi chậm**) giữa hai symbols liên tiếp.
  - **Block Fading**: Các hệ số fading không thay đổi trong khoảng thời gian 1 Block và thường thay đổi **đột ngột** giữa hai Blocks.

- 1 bit feedback: Bob sử dụng 1 bit để phản hồi lại Alice để đảm bảo $R_b < C_b$ [Zhou11, He2016]

  - Với mô hình hiện tại, vì cần sử dụng interference nên ngay cả khi bên nhận phản hồi 0 thì cũng vẫn phát gói tin ngẫu nhiên.

- Khi sử dụng wiretap code, có hai tham số liên quan đến tốc độ là tốc độ truyền từ mã $R_b = \frac{H(X^n)}{n}$ và tốc độ truyền tin mật $R_s = \frac{H(M)}{n}$

- Tốc độ truyền tin (transmission rate) phản ánh độ đo của một bộ mã hóa, tốc độ truyền tin an toàn (secrecy rate) phản ánh tốc độ truyền tin của một bộ mã hóa đạt được tính reliability ($P_{error} \rightarrow 0$) và tính secrecy ($I(M, Z^n) \rightarrow 0$)

- Các nghiên cứu trước đây về PLS trong CRN

  - Ý tưởng thường dựa trên Relay và AN
  - Hầu hết chỉ xem xét secrecy cho SU, PU chỉ xem xét reliability (chỉ xuất hiện giống như một ràng buộc về Power cho SU và Relays)
  - Chỉ xem xét an toàn tuyệt đối
  - Chưa xem xét tình huống thực tế => Cạnh tranh + Đôi bên cùng có lợi
  - Coi CSIT hoàn hảo

=> Ở bài này

- An toàn một phần giúp tạo tính cạnh tranh giữa các bên SU
- Xem xét tính cạnh tranh + đôi bên cùng có lợi
- Chỉ biết về thống kê kênh truyền

- Hạn chế của hướng tiếp cận sử dụng Relay:

  - Vấn đề tin tưởng
  - Vấn đề đồng bộ

- Hạn chế của hướng tiếp cận sử dụng AN:

  - Năng lượng dành để sinh nhiễu
  - Từ góc nhìn của thiết kế hệ thống thì việc sử dụng nhiễu không mang thông tin làm **giảm hiệu quả sử dụng năng lượng** và **không khai thác hiệu quả thông lượng mạng**

- Underlay CRN thường liên quan đến bài toán Power Constraint cho SU nên tiếp cận tối ưu công suất truyền là tự nhiên.

- Cách phân loại CRN I

  - **Centralized Design Approach**: PU và SU được coi như chung một mạng và thiết kế đồng thời cho cả hai bên.
  - **Decentrialized Design Approach**: PU được thiết kế mà không cần quan tâm đến SU và SU chỉ cần một ít thông tin về PU Network. Có hai mô thức
    - C1: SU chỉ sử dụng một phần thời gian để truyền cho mình, phần còn lại đóng vai trò như Relay ==> Cần yêu cầu tri thức về PU
    - C2: Ràng buộc về Interference từ SU Interference Temperature - IT
      - Khi thiết kế SU, không cần quan tâm về cách thức trao đổi giữa PTx và PRx (chỉ cần PRx để xác định interference)

- Cách phân loại CRN II

  - **Infrastructure-based**: Các SU truyền thông thông qua một SU Base Station.
    - Uplink: MAC
    - Downlink: BC
  - **Ad hoc**: Các SU truyền thông phân tán, trực tiếp với nhau
    - IC - Interference Channel

- Có hai hướng tiếp cận trong các nghiên cứu về PLS:
  - Khía cạnh lý thuyết thông tin: ecrecy Capacity, achivable secrecy rate, capacity-equivocation region
  - Khía cạnh thiết kế: Optimization và Signal Processing
