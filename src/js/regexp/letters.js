'use strict';

/**
 * @see https://www.unicode.org/Public/UCD/latest/ucd/DerivedCoreProperties.txt
 */
if( 'LETTERS' in RegExp === false ) {
	RegExp.LETTERS = "\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u01BA\\u01BB\\u01BC-\\u01BF\\u01C0-\\u01C3\\u01C4-\\u0293\\u0294\\u0295-\\u02AF\\u0345\\u0370-\\u0373\\u0376-\\u0377\\u037B-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0561-\\u0587\\u05B0-\\u05BD\\u05BF\\u05C1-\\u05C2\\u05C4-\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u063F\\u0641-\\u064A\\u064B-\\u0657\\u0659-\\u065F\\u066E-\\u066F\\u0670\\u0671-\\u06D3\\u06D5\\u06D6-\\u06DC\\u06E1-\\u06E4\\u06E7-\\u06E8\\u06ED\\u06EE-\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0711\\u0712-\\u072F\\u0730-\\u073F\\u074D-\\u07A5\\u07A6-\\u07B0\\u07B1\\u07CA-\\u07EA\\u0800-\\u0815\\u0816-\\u0817\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082C\\u0840-\\u0858\\u0860-\\u086A\\u08A0-\\u08B4\\u08B6-\\u08BD\\u08D4-\\u08DF\\u08E3-\\u08E9\\u08F0-\\u0902\\u0903\\u0904-\\u0939\\u093A\\u093B\\u093D\\u093E-\\u0940\\u0941-\\u0948\\u0949-\\u094C\\u094E-\\u094F\\u0950\\u0955-\\u0957\\u0958-\\u0961\\u0962-\\u0963\\u0972-\\u0980\\u0981\\u0982-\\u0983\\u0985-\\u098C\\u098F-\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09BE-\\u09C0\\u09C1-\\u09C4\\u09C7-\\u09C8\\u09CB-\\u09CC\\u09CE\\u09D7\\u09DC-\\u09DD\\u09DF-\\u09E1\\u09E2-\\u09E3\\u09F0-\\u09F1\\u09FC\\u0A01-\\u0A02\\u0A03\\u0A05-\\u0A0A\\u0A0F-\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32-\\u0A33\\u0A35-\\u0A36\\u0A38-\\u0A39\\u0A3E-\\u0A40\\u0A41-\\u0A42\\u0A47-\\u0A48\\u0A4B-\\u0A4C\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A70-\\u0A71\\u0A72-\\u0A74\\u0A75\\u0A81-\\u0A82\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2-\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0ABE-\\u0AC0\\u0AC1-\\u0AC5\\u0AC7-\\u0AC8\\u0AC9\\u0ACB-\\u0ACC\\u0AD0\\u0AE0-\\u0AE1\\u0AE2-\\u0AE3\\u0AF9\\u0AFA-\\u0AFC\\u0B01\\u0B02-\\u0B03\\u0B05-\\u0B0C\\u0B0F-\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32-\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B3E\\u0B3F\\u0B40\\u0B41-\\u0B44\\u0B47-\\u0B48\\u0B4B-\\u0B4C\\u0B56\\u0B57\\u0B5C-\\u0B5D\\u0B5F-\\u0B61\\u0B62-\\u0B63\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99-\\u0B9A\\u0B9C\\u0B9E-\\u0B9F\\u0BA3-\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BBF\\u0BC0\\u0BC1-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD0\\u0BD7\\u0C00\\u0C01-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C3E-\\u0C40\\u0C41-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4C\\u0C55-\\u0C56\\u0C58-\\u0C5A\\u0C60-\\u0C61\\u0C62-\\u0C63\\u0C80\\u0C81\\u0C82-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CBE\\u0CBF\\u0CC0-\\u0CC4\\u0CC6\\u0CC7-\\u0CC8\\u0CCA-\\u0CCB\\u0CCC\\u0CD5-\\u0CD6\\u0CDE\\u0CE0-\\u0CE1\\u0CE2-\\u0CE3\\u0CF1-\\u0CF2\\u0D00-\\u0D01\\u0D02-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D3E-\\u0D40\\u0D41-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D4E\\u0D54-\\u0D56\\u0D57\\u0D5F-\\u0D61\\u0D62-\\u0D63\\u0D7A-\\u0D7F\\u0D82-\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCF-\\u0DD1\\u0DD2-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DF2-\\u0DF3\\u0E01-\\u0E30\\u0E31\\u0E32-\\u0E33\\u0E34-\\u0E3A\\u0E40-\\u0E45\\u0E4D\\u0E81-\\u0E82\\u0E84\\u0E87-\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA-\\u0EAB\\u0EAD-\\u0EB0\\u0EB1\\u0EB2-\\u0EB3\\u0EB4-\\u0EB9\\u0EBB-\\u0EBC\\u0EBD\\u0EC0-\\u0EC4\\u0ECD\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F7E\\u0F7F\\u0F80-\\u0F81\\u0F88-\\u0F8C\\u0F8D-\\u0F97\\u0F99-\\u0FBC\\u1000-\\u102A\\u102B-\\u102C\\u102D-\\u1030\\u1031\\u1032-\\u1036\\u1038\\u103B-\\u103C\\u103D-\\u103E\\u103F\\u1050-\\u1055\\u1056-\\u1057\\u1058-\\u1059\\u105A-\\u105D\\u105E-\\u1060\\u1061\\u1062\\u1065-\\u1066\\u1067-\\u1068\\u106E-\\u1070\\u1071-\\u1074\\u1075-\\u1081\\u1082\\u1083-\\u1084\\u1085-\\u1086\\u108E\\u109C\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FD-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135F\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16F1-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1712-\\u1713\\u1720-\\u1731\\u1732-\\u1733\\u1740-\\u1751\\u1752-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772-\\u1773\\u1780-\\u17B3\\u17B6\\u17B7-\\u17BD\\u17BE-\\u17C5\\u17C6\\u17C7-\\u17C8\\u17DC\\u1820-\\u1842\\u1844-\\u1877\\u1880-\\u1884\\u1885-\\u1886\\u1887-\\u18A8\\u18A9\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u1922\\u1923-\\u1926\\u1927-\\u1928\\u1929-\\u192B\\u1930-\\u1931\\u1932\\u1933-\\u1938\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A17-\\u1A18\\u1A19-\\u1A1A\\u1A1B\\u1A20-\\u1A54\\u1A55\\u1A56\\u1A57\\u1A58-\\u1A5E\\u1A61\\u1A62\\u1A63-\\u1A64\\u1A65-\\u1A6C\\u1A6D-\\u1A72\\u1A73-\\u1A74\\u1B00-\\u1B03\\u1B04\\u1B05-\\u1B33\\u1B35\\u1B36-\\u1B3A\\u1B3B\\u1B3C\\u1B3D-\\u1B41\\u1B42\\u1B43\\u1B45-\\u1B4B\\u1B80-\\u1B81\\u1B82\\u1B83-\\u1BA0\\u1BA1\\u1BA2-\\u1BA5\\u1BA6-\\u1BA7\\u1BA8-\\u1BA9\\u1BAC-\\u1BAD\\u1BAE-\\u1BAF\\u1BBA-\\u1BE5\\u1BE7\\u1BE8-\\u1BE9\\u1BEA-\\u1BEC\\u1BED\\u1BEE\\u1BEF-\\u1BF1\\u1C00-\\u1C23\\u1C24-\\u1C2B\\u1C2C-\\u1C33\\u1C34-\\u1C35\\u1C4D-\\u1C4F\\u1C5A-\\u1C77\\u1C80-\\u1C88\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF2-\\u1CF3\\u1CF5-\\u1CF6\\u1D00-\\u1D2B\\u1D6B-\\u1D77\\u1D79-\\u1D9A\\u1DE7-\\u1DF4\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2134\\u2135-\\u2138\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183-\\u2184\\u24B6-\\u24E9\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2C7B\\u2C7E-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u3006\\u303C\\u3041-\\u3096\\u309F\\u30A1-\\u30FA\\u30FF\\u3105-\\u312E\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FEA\\uA000-\\uA014\\uA016-\\uA48C\\uA4D0-\\uA4F7\\uA500-\\uA60B\\uA610-\\uA61F\\uA62A-\\uA62B\\uA640-\\uA66D\\uA66E\\uA674-\\uA67B\\uA680-\\uA69B\\uA69E-\\uA69F\\uA6A0-\\uA6E5\\uA722-\\uA76F\\uA771-\\uA787\\uA78B-\\uA78E\\uA78F\\uA790-\\uA7AE\\uA7B0-\\uA7B7\\uA7F7\\uA7FA\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA823-\\uA824\\uA825-\\uA826\\uA827\\uA840-\\uA873\\uA880-\\uA881\\uA882-\\uA8B3\\uA8B4-\\uA8C3\\uA8C5\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA90A-\\uA925\\uA926-\\uA92A\\uA930-\\uA946\\uA947-\\uA951\\uA952\\uA960-\\uA97C\\uA980-\\uA982\\uA983\\uA984-\\uA9B2\\uA9B4-\\uA9B5\\uA9B6-\\uA9B9\\uA9BA-\\uA9BB\\uA9BC\\uA9BD-\\uA9BF\\uA9E0-\\uA9E4\\uA9E7-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA29-\\uAA2E\\uAA2F-\\uAA30\\uAA31-\\uAA32\\uAA33-\\uAA34\\uAA35-\\uAA36\\uAA40-\\uAA42\\uAA43\\uAA44-\\uAA4B\\uAA4C\\uAA4D\\uAA60-\\uAA6F\\uAA71-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB0\\uAAB1\\uAAB2-\\uAAB4\\uAAB5-\\uAAB6\\uAAB7-\\uAAB8\\uAAB9-\\uAABD\\uAABE\\uAAC0\\uAAC2\\uAADB-\\uAADC\\uAAE0-\\uAAEA\\uAAEB\\uAAEC-\\uAAED\\uAAEE-\\uAAEF\\uAAF2\\uAAF5\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB60-\\uAB65\\uAB70-\\uABBF\\uABC0-\\uABE2\\uABE3-\\uABE4\\uABE5\\uABE6-\\uABE7\\uABE8\\uABE9-\\uABEA\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1E\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40-\\uFB41\\uFB43-\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFF6F\\uFF71-\\uFF9D\\uFFA0-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC\\u10000-\\u1000B\\u1000D-\\u10026\\u10028-\\u1003A\\u1003C-\\u1003D\\u1003F-\\u1004D\\u10050-\\u1005D\\u10080-\\u100FA\\u10280-\\u1029C\\u102A0-\\u102D0\\u10300-\\u1031F\\u1032D-\\u10340\\u10342-\\u10349\\u10350-\\u10375\\u10376-\\u1037A\\u10380-\\u1039D\\u103A0-\\u103C3\\u103C8-\\u103CF\\u10400-\\u1044F\\u10450-\\u1049D\\u104B0-\\u104D3\\u104D8-\\u104FB\\u10500-\\u10527\\u10530-\\u10563\\u10600-\\u10736\\u10740-\\u10755\\u10760-\\u10767\\u10800-\\u10805\\u10808\\u1080A-\\u10835\\u10837-\\u10838\\u1083C\\u1083F-\\u10855\\u10860-\\u10876\\u10880-\\u1089E\\u108E0-\\u108F2\\u108F4-\\u108F5\\u10900-\\u10915\\u10920-\\u10939\\u10980-\\u109B7\\u109BE-\\u109BF\\u10A00\\u10A01-\\u10A03\\u10A05-\\u10A06\\u10A0C-\\u10A0F\\u10A10-\\u10A13\\u10A15-\\u10A17\\u10A19-\\u10A33\\u10A60-\\u10A7C\\u10A80-\\u10A9C\\u10AC0-\\u10AC7\\u10AC9-\\u10AE4\\u10B00-\\u10B35\\u10B40-\\u10B55\\u10B60-\\u10B72\\u10B80-\\u10B91\\u10C00-\\u10C48\\u10C80-\\u10CB2\\u10CC0-\\u10CF2\\u11000\\u11001\\u11002\\u11003-\\u11037\\u11038-\\u11045\\u11082\\u11083-\\u110AF\\u110B0-\\u110B2\\u110B3-\\u110B6\\u110B7-\\u110B8\\u110D0-\\u110E8\\u11100-\\u11102\\u11103-\\u11126\\u11127-\\u1112B\\u1112C\\u1112D-\\u11132\\u11150-\\u11172\\u11176\\u11180-\\u11181\\u11182\\u11183-\\u111B2\\u111B3-\\u111B5\\u111B6-\\u111BE\\u111BF\\u111C1-\\u111C4\\u111DA\\u111DC\\u11200-\\u11211\\u11213-\\u1122B\\u1122C-\\u1122E\\u1122F-\\u11231\\u11232-\\u11233\\u11234\\u11237\\u1123E\\u11280-\\u11286\\u11288\\u1128A-\\u1128D\\u1128F-\\u1129D\\u1129F-\\u112A8\\u112B0-\\u112DE\\u112DF\\u112E0-\\u112E2\\u112E3-\\u112E8\\u11300-\\u11301\\u11302-\\u11303\\u11305-\\u1130C\\u1130F-\\u11310\\u11313-\\u11328\\u1132A-\\u11330\\u11332-\\u11333\\u11335-\\u11339\\u1133D\\u1133E-\\u1133F\\u11340\\u11341-\\u11344\\u11347-\\u11348\\u1134B-\\u1134C\\u11350\\u11357\\u1135D-\\u11361\\u11362-\\u11363\\u11400-\\u11434\\u11435-\\u11437\\u11438-\\u1143F\\u11440-\\u11441\\u11443-\\u11444\\u11445\\u11447-\\u1144A\\u11480-\\u114AF\\u114B0-\\u114B2\\u114B3-\\u114B8\\u114B9\\u114BA\\u114BB-\\u114BE\\u114BF-\\u114C0\\u114C1\\u114C4-\\u114C5\\u114C7\\u11580-\\u115AE\\u115AF-\\u115B1\\u115B2-\\u115B5\\u115B8-\\u115BB\\u115BC-\\u115BD\\u115BE\\u115D8-\\u115DB\\u115DC-\\u115DD\\u11600-\\u1162F\\u11630-\\u11632\\u11633-\\u1163A\\u1163B-\\u1163C\\u1163D\\u1163E\\u11640\\u11644\\u11680-\\u116AA\\u116AB\\u116AC\\u116AD\\u116AE-\\u116AF\\u116B0-\\u116B5\\u11700-\\u11719\\u1171D-\\u1171F\\u11720-\\u11721\\u11722-\\u11725\\u11726\\u11727-\\u1172A\\u118A0-\\u118DF\\u118FF\\u11A00\\u11A01-\\u11A06\\u11A07-\\u11A08\\u11A09-\\u11A0A\\u11A0B-\\u11A32\\u11A35-\\u11A38\\u11A39\\u11A3A\\u11A3B-\\u11A3E\\u11A50\\u11A51-\\u11A56\\u11A57-\\u11A58\\u11A59-\\u11A5B\\u11A5C-\\u11A83\\u11A86-\\u11A89\\u11A8A-\\u11A96\\u11A97\\u11AC0-\\u11AF8\\u11C00-\\u11C08\\u11C0A-\\u11C2E\\u11C2F\\u11C30-\\u11C36\\u11C38-\\u11C3D\\u11C3E\\u11C40\\u11C72-\\u11C8F\\u11C92-\\u11CA7\\u11CA9\\u11CAA-\\u11CB0\\u11CB1\\u11CB2-\\u11CB3\\u11CB4\\u11CB5-\\u11CB6\\u11D00-\\u11D06\\u11D08-\\u11D09\\u11D0B-\\u11D30\\u11D31-\\u11D36\\u11D3A\\u11D3C-\\u11D3D\\u11D3F-\\u11D41\\u11D43\\u11D46\\u11D47\\u12000-\\u12399\\u12480-\\u12543\\u13000-\\u1342E\\u14400-\\u14646\\u16800-\\u16A38\\u16A40-\\u16A5E\\u16AD0-\\u16AED\\u16B00-\\u16B2F\\u16B30-\\u16B36\\u16B63-\\u16B77\\u16B7D-\\u16B8F\\u16F00-\\u16F44\\u16F50\\u16F51-\\u16F7E\\u17000-\\u187EC\\u18800-\\u18AF2\\u1B000-\\u1B11E\\u1B170-\\u1B2FB\\u1BC00-\\u1BC6A\\u1BC70-\\u1BC7C\\u1BC80-\\u1BC88\\u1BC90-\\u1BC99\\u1BC9E\\u1D400-\\u1D454\\u1D456-\\u1D49C\\u1D49E-\\u1D49F\\u1D4A2\\u1D4A5-\\u1D4A6\\u1D4A9-\\u1D4AC\\u1D4AE-\\u1D4B9\\u1D4BB\\u1D4BD-\\u1D4C3\\u1D4C5-\\u1D505\\u1D507-\\u1D50A\\u1D50D-\\u1D514\\u1D516-\\u1D51C\\u1D51E-\\u1D539\\u1D53B-\\u1D53E\\u1D540-\\u1D544\\u1D546\\u1D54A-\\u1D550\\u1D552-\\u1D6A5\\u1D6A8-\\u1D6C0\\u1D6C2-\\u1D6DA\\u1D6DC-\\u1D6FA\\u1D6FC-\\u1D714\\u1D716-\\u1D734\\u1D736-\\u1D74E\\u1D750-\\u1D76E\\u1D770-\\u1D788\\u1D78A-\\u1D7A8\\u1D7AA-\\u1D7C2\\u1D7C4-\\u1D7CB\\u1E000-\\u1E006\\u1E008-\\u1E018\\u1E01B-\\u1E021\\u1E023-\\u1E024\\u1E026-\\u1E02A\\u1E800-\\u1E8C4\\u1E900-\\u1E943\\u1E947\\u1EE00-\\u1EE03\\u1EE05-\\u1EE1F\\u1EE21-\\u1EE22\\u1EE24\\u1EE27\\u1EE29-\\u1EE32\\u1EE34-\\u1EE37\\u1EE39\\u1EE3B\\u1EE42\\u1EE47\\u1EE49\\u1EE4B\\u1EE4D-\\u1EE4F\\u1EE51-\\u1EE52\\u1EE54\\u1EE57\\u1EE59\\u1EE5B\\u1EE5D\\u1EE5F\\u1EE61-\\u1EE62\\u1EE64\\u1EE67-\\u1EE6A\\u1EE6C-\\u1EE72\\u1EE74-\\u1EE77\\u1EE79-\\u1EE7C\\u1EE7E\\u1EE80-\\u1EE89\\u1EE8B-\\u1EE9B\\u1EEA1-\\u1EEA3\\u1EEA5-\\u1EEA9\\u1EEAB-\\u1EEBB\\u1F130-\\u1F149\\u1F150-\\u1F169\\u1F170-\\u1F189\\u20000-\\u2A6D6\\u2A700-\\u2B734\\u2B740-\\u2B81D\\u2B820-\\u2CEA1\\u2CEB0-\\u2EBE0\\u2F800-\\u2FA1D";
}

export default RegExp.LETTERS;