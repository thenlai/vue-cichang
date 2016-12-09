# design

每个题集称为一个Book，每个Book下有多个Chapter，一个Chapter有多个Word。Word是最小单位，即词条。

每个词都有以下基本题型：
  - 拼写
  - 按例句选词
  - 按解释选词
  - 按词选解析

即词的model如下：

```cpp
class Word {
  string word;
  string desc;
  vector<string> words_related;
  vector<string> descs_related;
  vector<string> example;
}
```

Chapter的model如下:

```cpp
class Chapter {
  int id;
  string cname;
  vector<Word> words;
}
```

Book的model如下：

```cpp
class Book {
  int id;
  string bname;
  language lan;
  string intro;
  string author;
  vector<Chapter> chapters;
}
```