package webdriverUniversityCucumber.Utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ReadConfigFile {
	protected InputStream input = null;
	protected Properties prop = null;		
	
	public ReadConfigFile() {
		try {
			ReadConfigFile.class.getClassLoader().getResourceAsStream(Constant.CONFIG_PROPERTIES_DIRECTORY);
			prop = new Properties();
			prop.load(input);
		} catch(IOException ex) {
			ex.printStackTrace();
		}
	}
	
	public String getBrowser() {
		if(prop.getProperty("browser") == null) {
			return "";
		}else {
			return prop.getProperty("browser");
		}
	}
}
